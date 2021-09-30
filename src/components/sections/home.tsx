import { Layout, Button, BottomBar, Logo } from '@/components'
import { Icon } from '@iconify/react'
import { NextPage } from 'next'

const Home: NextPage = () => (
  <Layout className="flex flex-col hero">
    <div className="text-center m-auto pt-10">
      <Logo />

      <p className="text-3xl font-semibold pt-4">
        Make your streams more virtual.
      </p>
      <div className="mt-12">
        <p className="text-subtle">Free and Open Source</p>
        <Button>Download</Button>
      </div>
    </div>

    <div className="bottom-0 mx-auto flex flex-col align-center items-center mb-2">
      <p className="text-subtle text-lg">Learn more</p>
      <Icon icon="akar-icons:chevron-down" className="text-subtle" />
    </div>

    <BottomBar />
  </Layout>
)

export default Home
