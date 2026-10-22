import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListeningTest from './listening/ListeningTest';
import ReadingTest from './reading/ReadingTest';
import listeningTests from './data/listening';
import readingTests from './data/reading';
import readingPractice from './data/reading/practice';
import VocabPage from './vocab/VocabPage';
import { cambridgeBookTestPractice } from './data/listening/cambridgeBookTestPractice'
import camTest from './data/reading/camTest'
export default function App() {
  const L = listeningTests.filter(Boolean);
  const R = readingTests.filter(Boolean);
  const R_practice = readingPractice.filter(Boolean);
  const listening_test = cambridgeBookTestPractice.filter(Boolean);
  const cam_reading = camTest.filter(Boolean);
  return (
    <Routes>
      <Route path="/" element={<Home listening={L} reading={R} />} />
      {L.map((test, i) => <Route key={`L${i + 1}`} path={`/listening/${i + 1}`} element={<ListeningTest test={test} />} />)}
      {R.map((test, i) => <Route key={`R${i + 1}`} path={`/reading/${i + 1}`} element={<ReadingTest test={test} />} />)}
      {R_practice.map((test, i) => <Route key={`R_practice${i + 1}`} path={`/reading/practice/${i + 1}`} element={<ReadingTest test={test} />} />)}
      <Route path="/vocab" element={<VocabPage />} />
      {listening_test.map((test, i) => <Route key={`listening_test${i + 3}`} path={`/listening/test-from-cambridge/${i + 3}`} element={<ListeningTest test={test} />} />)}
      {cam_reading.map((test, i) => <Route key={`cam_reading${i + 1}`} path={`/reading/test-from-cambridge/${i + 1}`} element={<ReadingTest test={test} />} />)}
    </Routes>
  );
}
