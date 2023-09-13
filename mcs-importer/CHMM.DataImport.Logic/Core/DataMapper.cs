// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.

using Amazon.Lambda.Core;
using AutoMapper;
using CHMM.DataImport.Logic.Core.Check;
using CHMM.DataImport.Logic.Core.In;
using CHMM.DataImport.Logic.Core.Out;
using CHMM.DataImport.Logic.Models;
using Newtonsoft.Json;

namespace CHMM.DataImport.Logic.Core
{
    public class DataMapper : IDataMapper
    {
        private readonly IMcsApi mcs;
        private readonly IMalwareScanner malwareScanner;
        private readonly IPostgreSql postgre;
        private readonly IMapper mapper;

        public DataMapper(
            IMcsApi mcs,
            IMalwareScanner malwareScanner,
            IPostgreSql postgre,
            IMapper mapper)
        {
            this.mcs = mcs;
            this.malwareScanner = malwareScanner;
            this.postgre = postgre;
            this.mapper = mapper;
        }

        public void Importdata(ILambdaContext? context)
        {
            LambdaLogger.Log("Now running Import data");
            var jsonData = mcs.GetAsync().Result;

            LambdaLogger.Log("Data from MCS: " + jsonData);   

            // malware scan the content
            if (malwareScanner.IsClean(jsonData))
            {
                LambdaLogger.Log("Data is clean");
                // deserialise the data from the api
                var data = JsonConvert.DeserializeObject<Root>(jsonData);
                // map model to new user object
                var dto = mapper.Map<Root, RootEntity>(data);

                LambdaLogger.Log("Data is mapped " + JsonConvert.SerializeObject(dto));
                
                // save to the database
                postgre.Set(dto);

                LambdaLogger.Log("Import data done " + JsonConvert.SerializeObject(dto));
            }
        }
    }
}
