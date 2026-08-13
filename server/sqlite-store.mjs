import Database from 'better-sqlite3';
import { dirname } from 'node:path';
import { mkdirSync } from 'node:fs';

export function openStore(path) {
  mkdirSync(dirname(path), { recursive: true });
  const db = new Database(path);
  db.pragma('journal_mode = WAL');
  db.exec('CREATE TABLE IF NOT EXISTS candidates (id TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, payload TEXT NOT NULL); CREATE TABLE IF NOT EXISTS interviews (id TEXT PRIMARY KEY, interviewer TEXT NOT NULL, start TEXT NOT NULL, end TEXT NOT NULL, status TEXT NOT NULL, payload TEXT NOT NULL);');
  return db;
}

export function loadSqlite(db, candidates, interviews) {
  for (const row of db.prepare('SELECT payload FROM candidates').all()) { const value = JSON.parse(row.payload); candidates.set(value.id, value); }
  for (const row of db.prepare('SELECT payload FROM interviews').all()) { const value = JSON.parse(row.payload); interviews.set(value.id, value); }
}

export function persistSqlite(db, candidates, interviews) {
  db.transaction(() => {
    db.prepare('DELETE FROM candidates').run(); db.prepare('DELETE FROM interviews').run();
    const candidateInsert = db.prepare('INSERT INTO candidates (id,name,email,payload) VALUES (?,?,?,?)');
    for (const value of candidates.values()) candidateInsert.run(value.id, value.name, value.email, JSON.stringify(value));
    const interviewInsert = db.prepare('INSERT INTO interviews (id,interviewer,start,end,status,payload) VALUES (?,?,?,?,?,?)');
    for (const value of interviews.values()) interviewInsert.run(value.id, value.interviewer || '', String(value.start), String(value.end), value.status, JSON.stringify(value));
  })();
}
