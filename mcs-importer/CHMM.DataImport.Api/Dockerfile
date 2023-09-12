#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["CHMM.DataImportApi/CHMM.DataImportApi.csproj", "CHMM.DataImportApi/"]
RUN dotnet restore "CHMM.DataImportApi/CHMM.DataImportApi.csproj"
COPY . .
WORKDIR "/src/CHMM.DataImportApi"
RUN dotnet build "CHMM.DataImportApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CHMM.DataImportApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CHMM.DataImportApi.dll"]