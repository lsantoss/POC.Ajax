FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["POC.Ajax/POC.Ajax.csproj", "POC.Ajax/"]
RUN dotnet restore "POC.Ajax/POC.Ajax.csproj"
COPY . .
WORKDIR "/src/POC.Ajax"
RUN dotnet build "POC.Ajax.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "POC.Ajax.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "POC.Ajax.dll"]