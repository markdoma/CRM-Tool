import Layout from '../../components/Layout';
import Stats from '../../components/Stats';
import UsersList from '../../components/UsersList';

export default function Home() {
  return (
    <Layout>
      {/* Main content */}
      <div className="flex flex-1 items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="flex h-full min-w-0 flex-1 flex-col lg:order-last md:pr-2"
          >
            <h1 id="primary-heading" className="sr-only">
              Photos
            </h1>
            {/* Your content */}
            <Stats />
          </section>
        </main>

        {/* Secondary column (hidden on smaller screens) */}
        <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white lg:block">
          {/* Your content */}
          <UsersList />
        </aside>
      </div>
    </Layout>
  );
}
