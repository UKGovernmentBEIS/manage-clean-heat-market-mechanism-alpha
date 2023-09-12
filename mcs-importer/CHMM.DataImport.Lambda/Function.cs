
using Amazon.Lambda.Annotations;
using Amazon.Lambda.Core;
using CHMM.DataImport.Logic.Core;
using Newtonsoft.Json;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace CHMM.DataImport.Lambda
{
    public class Function
    {
        private readonly IDataMapper dataMapper;

        public Function(IDataMapper dataMapper)
        {
            this.dataMapper = dataMapper;
        }

        /// <summary>
        /// Primarily use the Function Handler to kick off the data import.
        /// </summary>
        /// <param name="context"></param>
        [LambdaFunction]
        public void FunctionHandler(ILambdaContext? context)
        {
            LambdaLogger.Log("Executing Function");

            try
            {
                dataMapper.Importdata(context);
            } 
            catch (Exception ex)
            {
                LambdaLogger.Log($"Error message:{ex.Message}, stack: {ex.StackTrace}");
            }
        }
    }
}