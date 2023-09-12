using CHMM.DataImport.Logic.Core.In;
using Xunit;

namespace CHMM.DataImport.Logic.Tests
{
    public class McsApiTests
    {
        [Fact]
        public void CanCallMcsApi()
        {
            var api = new MscApi();
            var data = api.GetAsync().Result;
            Assert.NotNull(data);
        }
    }
}
