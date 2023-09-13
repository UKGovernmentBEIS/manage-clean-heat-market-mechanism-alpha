// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
using Amazon.Lambda.Annotations;
using Amazon.Lambda.Core;
using CHMM.DataImport.Logic;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CHMM.DataImport.Lambda
{
    [LambdaStartup]
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var connectionString = Environment.GetEnvironmentVariable("DB_INSTANCE_ADDRESS");

            if (connectionString == null)
            {
                LambdaLogger.Log("Could not load connection string from Environment variables");
                connectionString = config.GetConnectionString("McsData");
            } 
            else
            {
                var address = Environment.GetEnvironmentVariable("DB_INSTANCE_ADDRESS");
                var username = Environment.GetEnvironmentVariable("DB_INSTANCE_USERNAME");
                var password = Environment.GetEnvironmentVariable("DB_INSTANCE_PASSWORD");
                var database = Environment.GetEnvironmentVariable("DB_INSTANCE_NAME");

                connectionString = $"Server={address};Port=5432;Database={database};User Id={username};Password={password};";
            }

            services.RegisterServices(connectionString ?? "");
        }
    }
}
