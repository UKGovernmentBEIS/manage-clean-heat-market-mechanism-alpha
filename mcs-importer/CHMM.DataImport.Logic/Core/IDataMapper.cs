// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
namespace CHMM.DataImport.Logic.Core
{
    public interface IDataMapper
    {
        void Importdata(Amazon.Lambda.Core.ILambdaContext? context);
    }
}
