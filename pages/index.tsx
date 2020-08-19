import Link from 'next/link'
import {getLatestReportsData} from '../lib/reports'

type Props = {
  reportNames: string[]
}

export default function IndexPage(props: Props) {
  return (
    <>
      <h1>Reports</h1>

      <ul>
        {props.reportNames.map(reportName => (
          <li key={reportName}>
            <Link href="/reports/[name]" as={`/reports/${reportName}`}>
              <a>{reportName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const reports = await getLatestReportsData()

  return {
    props: {
      reportNames: Object.keys(reports)
    }
  }
}