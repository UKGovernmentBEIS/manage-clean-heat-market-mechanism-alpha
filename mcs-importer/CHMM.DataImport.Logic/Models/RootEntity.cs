// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
using Microsoft.EntityFrameworkCore;

namespace CHMM.DataImport.Logic.Models
{
    public class RootEntity
    {
        public int Id { get; set; }
        public string? CommissioningDate { get; set; }
        public int SystemDesignedToProvideID { get; set; }
        public string? SystemDesignedToProvideDescription { get; set; }
        public int AlternativeHeatingSystemID { get; set; }
        public string? AlternativeHeatingSystemDescription { get; set; }
        public int AlternativeHeatingSystemFuelID { get; set; }
        public string AlternativeHeatingSystemFuelDescription { get; set; }
        public string? AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string? AddressLine3 { get; set; }
        public string? County { get; set; }
        public string? Postcode { get; set; }
        public double CostOfInstallation { get; set; }
        public double TotalInstallationCapacity { get; set; }
        public int InstallerMCSID { get; set; }
    }
}
