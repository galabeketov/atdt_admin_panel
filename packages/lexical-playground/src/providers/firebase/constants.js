/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export const config = {
  apiKey: 'AIzaSyDua1ypGXzZiIu-JnE-yhu1EXvZzx4kc4Q',
  authDomain: 'atdt-ad1c7.firebaseapp.com',
  databaseURL: 'https://atdt-ad1c7-default-rtdb.firebaseio.com',
  projectId: 'atdt-ad1c7',
  storageBucket: 'atdt-ad1c7.appspot.com',
  messagingSenderId: '1006802105238',
  appId: '1:1006802105238:web:816903f79733474fa7e3b7',
};

export const FIRESTORE_COLLECTIONS = {
  defaultTeamSnippets: 'defaultTeamSnippets',
  drafts: 'drafts',
  preferences: 'preferences',
  snippets: 'snippetsV2',
  timeEntryDrafts: 'timeEntryDrafts',
  timers: 'timers',
};

export const generateTimerId = ({memberId, ticketId}) =>
  `${memberId}-${ticketId}`;
export const generateDraftId = ({memberId, ticketId}) =>
  `${memberId}-${ticketId}`;
