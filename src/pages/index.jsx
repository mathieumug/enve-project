import Header from '@/components/Header'
import TabsSection from '@/components/TabsSection'
import ProjectsTab from '@/components/Projects'
import TeamSection from '@/components/TeamSection'
import MapComponent from '@/components/MapComponent'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Header />

      {/* Tabs section */}
      <TabsSection />

      {/* Projects */}
      <ProjectsTab />

      {/* Team */}
      <TeamSection />

      {/* Find Us */}
      <MapComponent />
    </Layout>
  )
}
