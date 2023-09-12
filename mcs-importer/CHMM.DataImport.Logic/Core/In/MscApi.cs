using Amazon.Lambda.Core;
using RestSharp;
using RestSharp.Authenticators;

namespace CHMM.DataImport.Logic.Core.In
{
    public class MscApi : IMcsApi
    {
        public async Task<string> GetAsync()
        {
            //throw new Exception();

            LambdaLogger.Log("Construct options");
            var options = new RestClientOptions("https://mcs.example.com/")
            {
                MaxTimeout = TimeSpan.FromSeconds(10).Milliseconds
            };
            LambdaLogger.Log("Build client");
            var client = new RestClient(options);
            LambdaLogger.Log("Create headers");
            var headers = new Dictionary<string, string> { 
                { "User", "username@example.com" }, 
                { "Authorization","XXXXXXXX"} 
            };
            LambdaLogger.Log("Add default headers");
            client.AddDefaultHeaders(headers);
            LambdaLogger.Log("Build request");
            var request = new RestRequest("GetCertificate/XXX-XXXXXXXX-X");
            LambdaLogger.Log("Set timeout");
            request.Timeout = TimeSpan.FromSeconds(10).Milliseconds;
            LambdaLogger.Log("Execute get async");
            var response = await client.GetAsync(request);
            LambdaLogger.Log("Return response content");
            return response.Content;
        }
    }
}