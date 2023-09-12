using Amazon.Lambda.Core;
using CHMM.DataImport.Logic.Core;
using CHMM.DataImport.Logic.Core.Check;
using CHMM.DataImport.Logic.Core.In;
using CHMM.DataImport.Logic.Core.Out;
using CHMM.DataImport.Logic.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CHMM.DataImport.Logic
{
    public static class Assembly
    {
        public static void RegisterServices(this IServiceCollection services, string connectionString)
        {
            LambdaLogger.Log("Register MscApi");
            services.AddTransient<IMcsApi, MscApi>();
            LambdaLogger.Log("Register MalwareScanner");
            services.AddTransient<IMalwareScanner, MalwareScanner>();
            LambdaLogger.Log("Register PostgreSql");
            services.AddTransient<IPostgreSql, PostgreSql>();
            LambdaLogger.Log("Register DataMapper");
            services.AddTransient<IDataMapper, DataMapper>();
            LambdaLogger.Log("Register DataContext, Connection string: " + connectionString);
            services.AddDbContext<DataContext>(options =>
                options.UseNpgsql(connectionString));
            LambdaLogger.Log("Add AutoMapper");
            services.AddAutoMapper(typeof(Assembly));
            LambdaLogger.Log("Registration complete");
        }
    }
}
