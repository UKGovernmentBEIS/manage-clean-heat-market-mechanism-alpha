using Xunit;
using Moq;
using CHMM.DataImport.Logic.Core;
using CHMM.DataImport.Logic.Models;
using CHMM.DataImport.Lambda;
using AutoMapper;
using CHMM.DataImport.Logic.Helpers;
using CHMM.DataImport.Logic.Core.Out;
using CHMM.DataImport.Logic.Core.In;
using CHMM.DataImport.Logic.Core.Check;
using Newtonsoft.Json;
using System.Diagnostics.Metrics;

namespace CHMM.DataImport.Logic.Tests;

public class FunctionHandlerTests
{
    private static IMapper mapper;
    public FunctionHandlerTests()
    {
        if (mapper == null)
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AutoMapperProfile());
            });
            IMapper mapper = mappingConfig.CreateMapper();
            FunctionHandlerTests.mapper = mapper;
        }
    }

    [Fact]
    public void FunctionHandlerCallsDataMappperImportdataAsyncOnce()
    {
        // Arrange
        var mapper = new Mock<IDataMapper>();
        mapper.Setup(mapper => mapper.Importdata(null));
        var function = new Function(mapper.Object);

        // Act
        function.FunctionHandler(null);

        // Assert
        mapper.Verify(mock => mock.Importdata(null), Times.Once());
    }

    [Fact]
    public void FunctionHandlerCallsWithCleanDataMcsApiGetAsyncOnce()
    {
        // Arrange
        var apiMock = new Mock<IMcsApi>();
        apiMock.Setup(loader => loader.GetAsync()).ReturnsAsync("");
        
        var sqlMock = new Mock<IPostgreSql>();

        var malware = new Mock<IMalwareScanner>();
        malware.Setup(mw => mw.IsClean(It.IsAny<string>())).Returns(true);

        var mapper = new DataMapper(apiMock.Object,malware.Object, sqlMock.Object, FunctionHandlerTests.mapper);
        var function = new Function(mapper);

        // Act
        function.FunctionHandler(null);

        // Assert
        apiMock.Verify(mock => mock.GetAsync(), Times.Once());
    }

    [Fact]
    public void FunctionHandlerCallsWithCleanDataPostgreSqlSetOnce()
    {
        // Arrange
        var apiMock = new Mock<IMcsApi>();
        apiMock.Setup(loader => loader.GetAsync()).ReturnsAsync("");

        var sqlMock = new Mock<IPostgreSql>();
        sqlMock.Setup(saver => saver.Set(It.IsAny<RootEntity>()));

        var malware = new Mock<IMalwareScanner>();
        malware.Setup(mw => mw.IsClean(It.IsAny<string>())).Returns(true);

        var mapper = new DataMapper(apiMock.Object, malware.Object, sqlMock.Object, FunctionHandlerTests.mapper);
        var function = new Function(mapper);

        // Act
        function.FunctionHandler(null);

        // Assert
        sqlMock.Verify(mock => mock.Set(It.IsAny<RootEntity>()), Times.Once());
    }

    [Fact]
    public void FunctionHandlerCallsWithUncleanDataPostgreSqlSetOnce()
    {
        // Arrange
        var apiMock = new Mock<IMcsApi>();

        var sqlMock = new Mock<IPostgreSql>();
        sqlMock.Setup(saver => saver.Set(It.IsAny<RootEntity>()));

        var malware = new Mock<IMalwareScanner>();
        malware.Setup(mw => mw.IsClean(It.IsAny<string>())).Returns(false);

        var mapper = new DataMapper(apiMock.Object, malware.Object, sqlMock.Object, FunctionHandlerTests.mapper);
        var function = new Function(mapper);

        // Act
        function.FunctionHandler(null);

        // Assert
        sqlMock.Verify(mock => mock.Set(It.IsAny<RootEntity>()), Times.Never());
    }

    [Fact]
    public void MapperCorrectlyMapsData()
    {
        var testData = new RootEntity { County = "TestData" };

        // Arrange
        var apiMock = new Mock<IMcsApi>();
        apiMock.Setup(api => api.GetAsync()).ReturnsAsync(JsonConvert.SerializeObject(testData));

        var sqlMock = new Mock<IPostgreSql>();
        sqlMock.Setup(saver => saver.Set(It.IsAny<RootEntity>()));

        var malware = new Mock<IMalwareScanner>();
        malware.Setup(mw => mw.IsClean(It.IsAny<string>())).Returns(true);

        var mapper = new DataMapper(apiMock.Object, malware.Object, sqlMock.Object, FunctionHandlerTests.mapper);
        var function = new Function(mapper);

        // Act
        function.FunctionHandler(null);

        // Assert
        sqlMock.Verify(mock => mock.Set(It.Is<RootEntity>(t => 
            t.County == testData.County
        )), Times.Once());
    }
}
