// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
using CHMM.DataImport.Logic.Models;

namespace CHMM.DataImport.Logic.Core.In
{
    public interface IMcsApi
    {
        Task<string> GetAsync();
    }
}
