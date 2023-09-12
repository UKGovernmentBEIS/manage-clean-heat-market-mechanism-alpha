using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CHMM.DataImport.Logic.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Data",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CommissioningDate = table.Column<string>(type: "text", nullable: false),
                    SystemDesignedToProvideID = table.Column<int>(type: "integer", nullable: false),
                    SystemDesignedToProvideDescription = table.Column<string>(type: "text", nullable: false),
                    AlternativeHeatingSystemID = table.Column<int>(type: "integer", nullable: false),
                    AlternativeHeatingSystemDescription = table.Column<string>(type: "text", nullable: false),
                    AlternativeHeatingSystemFuelID = table.Column<int>(type: "integer", nullable: false),
                    AlternativeHeatingSystemFuelDescription = table.Column<string>(type: "text", nullable: false),
                    AddressLine1 = table.Column<string>(type: "text", nullable: false),
                    AddressLine2 = table.Column<string>(type: "text", nullable: false),
                    AddressLine3 = table.Column<string>(type: "text", nullable: false),
                    County = table.Column<string>(type: "text", nullable: false),
                    Postcode = table.Column<string>(type: "text", nullable: false),
                    CostOfInstallation = table.Column<double>(type: "double precision", nullable: false),
                    TotalInstallationCapacity = table.Column<double>(type: "double precision", nullable: false),
                    InstallerMCSID = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Data", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Data");
        }
    }
}
