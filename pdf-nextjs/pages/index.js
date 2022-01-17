import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PDFViewer from '../pdf/pdf-viewer'

export default function Home() {
  return (
    <div>
        <PDFViewer />
    </div>
  )
}
