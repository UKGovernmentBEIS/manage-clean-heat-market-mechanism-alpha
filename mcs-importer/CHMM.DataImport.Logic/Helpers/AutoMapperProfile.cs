using AutoMapper;
using CHMM.DataImport.Logic.Models;

namespace CHMM.DataImport.Logic.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Root, RootEntity>();
        }
    }
}
