const logo_hagl = require('../images/hagl.png')
const logo_ss_hagl = require('../images/ss hagl.png')
const logo_km_hagl = require('../images/km hagl.png')

const logo_hn = require('../images/hn.png')
const logo_ss_hn = require('../images/ss hn.png')
const logo_km_hn = require('../images/km hn.png')

const logo_hcmc = require('../images/hcmc.png')
const logo_ss_hcmc = require('../images/ss hcmc.png')
const logo_km_hcmc = require('../images/km hcmc.png')

const logo_hlht = require('../images/hlht.png')
const logo_ss_hlht = require('../images/ss hlht.png')
const logo_km_hlht = require('../images/km hlht.png')

const logo_shbdn = require('../images/shbdn.png')
const logo_ss_shbdn = require('../images/ss shbdn.png')
const logo_km_shbdn = require('../images/km shbdn.png')

const logo_tbd = require('../images/tbd.png')
const logo_ss_tbd = require('../images/ss tbd.png')
const logo_km_tbd = require('../images/km shbdn.png')

const logo_viettel = require('../images/viettel.png')
const logo_ss_viettel = require('../images/ss viettel.png')
const logo_km_viettel = require('../images/km viettel.png')

const logo_sg = require('../images/sg.png')
const logo_ss_sg = require('../images/ss sg.png')
const logo_km_sg = require('../images/km hcmc.png')

const logo_nd = require('../images/nd.png')
const logo_ss_nd = require('../images/ss nd.png')
const logo_km_nd = require('../images/km hcmc.png')

const logo_bbd = require('../images/bbd.png')
const logo_ss_bbd = require('../images/ss bbd.png')
const logo_km_bbd = require('../images/km shbdn.png')

const logo_slna = require('../images/slna.png')
const logo_ss_slna = require('../images/ss slna.png')
const logo_km_slna = require('../images/km hlht.png')

const logo_hp = require('../images/hp.png')
const logo_ss_hp = require('../images/none.png')
const logo_km_hp = require('../images/km hn.png')

const logo_dath = require('../images/dath.png')
const logo_ss_dath = require('../images/ss dath.png')
const logo_km_dath = require('../images/km hn.png')

const clubs = [
    {
        id: 1,
        name: "Hoang Anh Gia Lai",
        founded: '2001',
        stadium: "Pleiku Stadium",
        location: "Gia Lai",
        logo: logo_hagl,
        logoShirtSponsor: logo_ss_hagl,
        logoKitManufacturer: logo_km_hagl,
        categorySlug: "vleague-1",
        slug: "hoang-anh-gia-lai",
        mainColor: "yellow"
    },
    {
        id: 2,
        name: "Ha Noi",
        founded: '2006',
        stadium: "Hang Day Stadium",
        location: "Ha Noi",
        logo: logo_hn,
        logoShirtSponsor: logo_ss_hn,
        logoKitManufacturer: logo_km_hn,
        categorySlug: "vleague-1",
        slug: "ha-noi",
        mainColor: "purple"
    },
    {
        id: 3,
        name: "Ho Chi Minh City",
        founded: '2009',
        stadium: "Thong Nhat Stadium",
        location: "Ho Chi Minh City",
        logo: logo_hcmc,
        logoShirtSponsor: logo_ss_hcmc,
        logoKitManufacturer: logo_km_hcmc,
        categorySlug: "vleague-1",
        slug: "ho-chi-minh-city",
        mainColor: "red"
    },
    {
        id: 4,
        name: "Hong Linh Ha Tinh",
        founded: '2015',
        stadium: "Ha Tinh Stadium",
        location: "Ha Tinh",
        logo: logo_hlht,
        logoShirtSponsor: logo_ss_hlht,
        logoKitManufacturer: logo_km_hlht,
        categorySlug: "vleague-1",
        slug: "hong-linh-ha-tinh",
        mainColor: "pink"
    },
    {
        id: 5,
        name: "SHB Da Nang",
        founded: '1976',
        stadium: "Hoa Xuan Stadium",
        location: "Da Nang",
        logo: logo_shbdn,
        logoShirtSponsor: logo_ss_shbdn,
        logoKitManufacturer: logo_km_shbdn,
        categorySlug: "vleague-1",
        slug: "shb-da-nang",
        mainColor: "orange"
    },
    {
        id: 6,
        name: "Topenland Binh Dinh",
        founded: '1975',
        stadium: "Quy Nhon Stadium",
        location: "Binh Dinh",
        logo: logo_tbd,
        logoShirtSponsor: logo_ss_tbd,
        logoKitManufacturer: logo_km_tbd,
        categorySlug: "vleague-1",
        slug: "topenland-binh-dinh",
        mainColor: "orange"
    },
    {
        id: 7,
        name: "Viettel",
        founded: '2010',
        stadium: "Hang Day Stadium",
        location: "Ha Noi",
        logo: logo_viettel,
        logoShirtSponsor: logo_ss_viettel,
        logoKitManufacturer: logo_km_viettel,
        categorySlug: "vleague-1",
        slug: "viettel",
        mainColor: "red"
    },
    {
        id: 8,
        name: "Sai Gon",
        founded: '2016',
        stadium: "Thong Nhat Stadium",
        location: "Ho Chi Minh City",
        logo: logo_sg,
        logoShirtSponsor: logo_ss_sg,
        logoKitManufacturer: logo_km_sg,
        categorySlug: "vleague-1",
        slug: "sai-gon",
        mainColor: "pink"
    },
    {
        id: 9,
        name: "Nam Dinh",
        founded: '1965',
        stadium: "Thien Truong Stadium",
        location: "Nam Dinh",
        logo: logo_nd,
        logoShirtSponsor: logo_ss_nd,
        logoKitManufacturer: logo_km_nd,
        categorySlug: "vleague-1",
        slug: "nam-dinh",
        mainColor: "yellow"
    },
    {
        id: 10,
        name: "Becamex Binh Duong",
        founded: '1976',
        stadium: "Go Dau Stadium",
        location: "Binh Duong",
        logo: logo_bbd,
        logoShirtSponsor: logo_ss_bbd,
        logoKitManufacturer: logo_km_bbd,
        categorySlug: "vleague-1",
        slug: "becamex-binh-duong",
        mainColor: "purple"
    },
    {
        id: 11,
        name: "Song Lam Nghe An",
        founded: '1979',
        stadium: "Vinh Stadium",
        location: "Nghe An",
        logo: logo_slna,
        logoShirtSponsor: logo_ss_slna,
        logoKitManufacturer: logo_km_slna,
        categorySlug: "vleague-1",
        slug: "song-lam-nghe-an",
        mainColor: "yellow"
    },
    {
        id: 12,
        name: "Hai Phong",
        founded: '1952',
        stadium: "Lach Tray Stadium",
        location: "Hai Phong",
        logo: logo_hp,
        logoShirtSponsor: logo_ss_hp,
        logoKitManufacturer: logo_km_hp,
        categorySlug: "vleague-1",
        slug: "hai-phong",
        mainColor: "red"
    },
    {
        id: 13,
        name: "Dong A Thanh Hoa",
        founded: '2009',
        stadium: "Thanh Hoa Stadium",
        location: "Thanh Hoa",
        logo: logo_dath,
        logoShirtSponsor: logo_ss_dath,
        logoKitManufacturer: logo_km_dath,
        categorySlug: "vleague-1",
        slug: "dong-a-thanh-hoa",
        mainColor: "yellow"
    }
]

const getAllClubs = () => clubs

const getClubBySlug = (slug) => clubs.find(e => e.slug === slug)

const getClubById = (id) => clubs.find(e => e.id === id)

const clubData = {
    getAllClubs,
    getClubBySlug,
    getClubById
}

export default clubData