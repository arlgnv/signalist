import { Header } from './_components';

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
