import { Header } from './_layout/components';

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
