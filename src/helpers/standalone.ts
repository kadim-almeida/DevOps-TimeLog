/**
 * Modo "standalone": roda a extensão localmente sem estar dentro do Azure DevOps.
 * Útil para desenvolvimento e testes sem publicar a extensão.
 *
 * Ativa quando:
 * - A página não está em um iframe (window.self === window.top), ou
 * - A URL contém ?standalone=1
 */
export function isStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get('standalone') === '1') return true;
  try {
    return window.self === window.top;
  } catch {
    return true;
  }
}

/** Usuário mock para modo standalone */
export const MOCK_USER = {
  displayName: 'Dev (local)',
  id: 'local-user',
  descriptor: 'local',
  imageUrl: '',
  _links: {},
};

/** Host mock para Redux/organization em modo standalone */
export const MOCK_HOST = { name: 'Local', id: 'local' };

/** Organization mock para Redux em modo standalone */
export const MOCK_ORGANIZATION = { value: 'local', label: 'Local' };

/** Project mock para Redux em modo standalone */
export const MOCK_PROJECT = { value: 'local-project', label: 'Projeto local' };

/** IDs de work items usados nos mocks */
export const MOCK_WORK_ITEM_IDS = [1001, 1002, 1003];

/** Registros de tempo mockados para Painel e Registros */
export const MOCK_ENTRIES = [
  { id: 'mock-1', user: 'Dev (local)', userId: 'local-user', workItemId: 1001, workItemName: 'Tarefa exemplo A', date: '2026-01-20', time: 120, notes: 'Desenvolvimento local' },
  { id: 'mock-2', user: 'Dev (local)', userId: 'local-user', workItemId: 1001, workItemName: 'Tarefa exemplo A', date: '2026-01-21', time: 90, notes: '' },
  { id: 'mock-3', user: 'Dev (local)', userId: 'local-user', workItemId: 1002, workItemName: 'Tarefa exemplo B', date: '2026-01-22', time: 240, notes: 'Revisão e testes' },
  { id: 'mock-4', user: 'Dev (local)', userId: 'local-user', workItemId: 1002, workItemName: 'Tarefa exemplo B', date: '2026-01-23', time: 60, notes: '' },
  { id: 'mock-5', user: 'Dev (local)', userId: 'local-user', workItemId: 1003, workItemName: 'Tarefa exemplo C', date: '2026-01-27', time: 180, notes: 'Documentação' },
  { id: 'mock-6', user: 'Dev (local)', userId: 'local-user', workItemId: 1003, workItemName: 'Tarefa exemplo C', date: '2026-01-28', time: 150, notes: '' },
  { id: 'mock-7', user: 'Dev (local)', userId: 'local-user', workItemId: 1001, workItemName: 'Tarefa exemplo A', date: '2026-02-03', time: 90, notes: '' },
  { id: 'mock-8', user: 'Dev (local)', userId: 'local-user', workItemId: 1002, workItemName: 'Tarefa exemplo B', date: '2026-02-04', time: 120, notes: '' },
];

/** Equipes mockadas para o Painel */
export const MOCK_TEAMS = [
  { id: 'team-local', name: 'Equipe local' },
];

/** Membros mockados para a seção Pessoas */
export const MOCK_MEMBERS = [
  { id: 'local-user', displayName: 'Dev (local)', uniqueName: 'dev@local', isTeamAdmin: true },
];

/** Atividades mockadas para Gestão de atividades */
export const MOCK_ACTIVITIES = [
  { id: 'mock-act-1', name: 'Desenvolvimento', user: 'Dev (local)', userId: 'local-user', date: '2026-01-15T10:00:00.000Z' },
  { id: 'mock-act-2', name: 'Revisão de código', user: 'Dev (local)', userId: 'local-user', date: '2026-01-16T11:30:00.000Z' },
  { id: 'mock-act-3', name: 'Reunião', user: 'Dev (local)', userId: 'local-user', date: '2026-01-17T09:00:00.000Z' },
  { id: 'mock-act-4', name: 'Documentação', user: 'Dev (local)', userId: 'local-user', date: '2026-01-18T14:00:00.000Z' },
  { id: 'mock-act-5', name: 'Testes', user: 'Dev (local)', userId: 'local-user', date: '2026-01-19T16:45:00.000Z' },
];
