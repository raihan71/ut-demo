/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import actions from './actions';

export const ACTIONS = actions;
export const REGEX_EMAIL_VALIDATION = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_PHONE_NUMBER_VALIDATION = /(^\\+?62s?|^0)]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/;
export const REGEX_NUMBER_ONLY = /^[0-9]*$/;
export const REGEX_ALPHABET_ONLY = /^[A-Za-z]+$/;
export const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const REGEX_START_WITH_ZERO_EIGHT = /^[0]{1}[8]{1}\w*$/;
export const REGEX_START_WITH_ZERO = /^[0]{1}\w*$/;
export const docStatus = ({ meta, filter }) => ([
  {
    label: 'Semua Dokumen',
    count: meta ? meta.allCount : 0,
    active: filter === 0,
    code: 0,
    styleName: ''
  },
  {
    label: 'Disetujui',
    color: '#45BFB7',
    count: meta ? meta.publishedCount : 0,
    active: filter === 1,
    code: 1,
    styleName: 'disetujui'
  },
  {
    label: 'Menunggu Persetujuan',
    color: '#74B816',
    count: meta ? meta.approvalCount : 0,
    active: filter === 2,
    code: 2,
    styleName: 'menunggu-persetujuan'
  },
  {
    label: 'Perlu Revisi',
    color: '#D07A11',
    count: meta ? meta.revisionCount : 0,
    active: filter === 3,
    code: 3,
    styleName: 'perlu-revisi'
  },
  {
    label: 'Ditolak',
    color: '#DE1B1B',
    count: meta ? meta.rejectedCount : 0,
    active: filter === 4,
    code: 4,
    styleName: 'ditolak'
  },
  {
    label: 'Arsip',
    color: '#9E9E9E',
    count: meta ? meta.archivedCount : 0,
    active: filter === 6,
    code: 6,
    styleName: 'arsip'
  }
]);

export const docStatusUnggahPemilik = ({ meta, filter }) => ([
  {
    label: 'Semua Dokumen',
    count: meta ? meta.allCount : 0,
    active: filter === 0,
    code: 0,
    styleName: ''
  },
  {
    label: 'Disetujui',
    color: filter === 2 ? '#45BFB7':'#45BFB7',
    count: meta ? meta.approvedCount : 0,
    active: filter ===  2,
    code: 2,
    styleName: 'disetujui'
  },
  {
    label: 'Menunggu Persetujuan',
    color: '#74B816',
    count: meta ? meta.approvalCount : 0,
    active: filter === 7,
    code: 7,
    styleName: 'menunggu-persetujuan'
  },
  {
    label: 'Ditolak',
    color: '#DE1B1B',
    count: meta ? meta.rejectedCount : 0,
    active: filter === 4,
    code: 4,
    styleName: 'ditolak'
  },
  {
    label: 'Perlu Revisi',
    color: '#D07A11',
    count: meta ? meta.revisionCount : 0,
    active: filter === 3,
    code: 3,
    styleName: 'perlu-revisi'
  },
  {
    label: 'Arsip',
    color: '#9E9E9E',
    count: meta ? meta.archivedCount : 0,
    active: filter === 6,
    code: 6,
    styleName: 'arsip'
  }
]);

export const docStatusPermintaanUnduh = ({ meta, filter }) => ([
  {
    label: 'Semua Dokumen',
    count: meta ? meta.statusesCount['Semua Dokumen'] : 0,
    active: filter === 0,
    code: 0,
    styleName: ''
  },
  {
    label: 'Disetujui',
    color: '#45BFB7',
    count: meta ? meta.statusesCount['Download Dokumen Disetujui'] : 0,
    active: filter === 8,
    code: 8,
    styleName: 'disetujui'
  },
  {
    label: 'Menunggu Persetujuan',
    color: '#74B816',
    count: meta ? meta.statusesCount['Menunggu Persetujuan'] : 0,
    active: filter === 2,
    code: 2,
    styleName: 'menunggu-persetujuan'
  },
  {
    label: 'Ditolak',
    color: '#DE1B1B',
    count: meta ? meta.statusesCount['Ditolak'] : 0,
    active: filter === 4,
    code: 4,
    styleName: 'ditolak'
  },
]);
