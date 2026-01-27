import { Header } from './components';

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-360 min-w-80 px-8 pt-10 pb-12.5">
        {children}
      </main>
    </>
  );
}

export default Layout;
