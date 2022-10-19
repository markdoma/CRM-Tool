import Layout from '../../components/Layout';
import ClientFeed from '../../components/ClientFeed';
import ClientDetails from '../../components/ClientDetails';

export default function UserDetails() {
  return (
    <Layout>
      <div className="flex w-full">
        <div className="w-1/2 m-3">
          <ClientDetails />
        </div>
        <div className="w-1/2">
          <ClientFeed />
        </div>
      </div>
    </Layout>
  );
}
