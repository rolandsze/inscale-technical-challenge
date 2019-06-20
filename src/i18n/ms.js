/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

// Malay translation
export default {
    languageCodes: {
        en: 'En',
        zh: 'Zh',
        ms: 'Ms'
    },
    index: 'Laman Utama',
    campaigns: 'Kempens',
    backToIndex: 'Kembali ke Laman Utama',
    hiThere: 'Hello!',
    footer: {
        createdBy: 'Dicipta oleh Roland Szecsenyi untuk INSCALE.',
        gitHub: 'GitHub',
        linkedIn: 'LinkedIn'
    },
    introduction: 'Terima kasih kerana menyemakkan pelaksanaan saya untuk cabaran teknikal yang disediakan oleh ' +
        'INSCALE. Di atas, anda boleh mengemudi ke laman web kempens di mana anda boleh tambah kempen melalui konsol ' +
        'pelayar web. Selamat semakan! Roland',
    campaign: {
        counter: 'Tunjukkan {{counter}} daripada {{total}} kempen(s)',
        name: 'Nama Kempen',
        startDate: 'Tarikh Mula',
        endDate: 'Tarikh Tamat',
        status: 'Status',
        active: 'Aktif',
        inactive: 'Inaktif',
        budget: 'Belanjawan',
        budgetDisplayFormat: '0.00a $',
        searchByName: 'Carian dengan Nama Kempen',
        noDataAddedYet: 'Tiada lagi data yang telah ditambahkan. Sila buka konsol pelayar web anda dan tambah ' +
            'dengan menggunakan fungsi <b>window.AddCampaigns</b>. Data input mesti memenuhi format yang ' +
            'diharapkan.<br/> {{expectedFormat}}',
        expectedFormat: 'Format yang diharapkan adalah array daripada kempens. Setiap kempen mesti sebagai object dengan sifat yang berikut:<br/> ' +
            '"id": Number,<br/>' +
            '"name": String,<br/>' +
            '"startDate": String yang memenuhi format tarik yang diharapkan. {{expectedInputDateFormat}},<br/>' +
            '"endDate": Stringyang memenuhi format tarik yang diharapkan. {{expectedInputDateFormat}},<br/>' +
            '"budget": Nombor positif',
        invalidFormat: 'Uh oh, data yang anda cuba tambahkan tidak memenuhi format yang diharapkan.<br/> {{expectedFormat}}',
    }
};
