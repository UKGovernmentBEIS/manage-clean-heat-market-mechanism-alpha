// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
namespace CHMM.DataImport.Logic.Models
{
    public class ProductList
    {
        public string MCSProductCode { get; set; }
        public int MCSProductID { get; set; }
        public double SCOP { get; set; }
        public int FlowTemperature { get; set; }
        public string Manufacturer { get; set; }
        public string MCSCertifiedProductName { get; set; }
    }
}
