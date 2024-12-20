/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export const config = {
  apiKey: 'AIzaSyCu54O8wC0t1pOEd6LiOygZhH3a4iLwHWc',
  appId: '1:881470878218:web:e06c18289175de87db25f3',
  authDomain: 'bmi-c254e.firebaseapp.com',
  measurementId: 'G-6R0NVJTBVS',
  messagingSenderId: '881470878218',
  projectId: 'bmi-c254e',
  storageBucket: 'bmi-c254e.firebasestorage.app',
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
