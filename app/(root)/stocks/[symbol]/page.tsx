import {
  SymbolInfo,
  FundamentalData,
  CompanyProfile,
  TechnicalAnalysis,
  AdvancedRealTimeChart,
} from './_components';

async function Page({ params }: PageProps<'/stocks/[symbol]'>) {
  const { symbol } = await params;

  return (
    <main className="mx-auto grid max-w-360 min-w-80 px-8 pt-10 pb-12.5 max-md:gap-y-4 md:grid-cols-2 md:items-start md:gap-x-6 xl:gap-x-8">
      <h1 className="sr-only">{symbol}</h1>
      <div className="grid gap-y-4 md:gap-y-6 xl:gap-y-8">
        <SymbolInfo />
        <FundamentalData />
        <CompanyProfile />
      </div>
      <div className="grid gap-y-4 md:gap-y-6 xl:gap-y-8">
        <TechnicalAnalysis />
        <AdvancedRealTimeChart />
      </div>
    </main>
  );
}

export default Page;
