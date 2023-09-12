namespace CHMM.DataImport.Logic.Core
{
    public interface IDataMapper
    {
        void Importdata(Amazon.Lambda.Core.ILambdaContext? context);
    }
}
