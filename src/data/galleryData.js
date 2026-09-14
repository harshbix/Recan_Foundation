/**
 * RECAN Foundation Gallery Data
 * Centralized data source for all gallery images, topics, captions, and descriptions.
 * Easily add, edit, reorder, or feature images without modifying UI components.
 */

export const galleryTopics = [
  {
    id: 'all',
    name: 'All Stories',
    swName: 'Hadithi Zote',
    description: 'Explore all moments of impact, community outreach, and ongoing initiatives across Tanzania.',
    swDescription: 'Tazama matukio yote ya athari, ufikiaji wa jamii, na miradi inayoendelea kote Tanzania.',
  },
  {
    id: 'community-education',
    name: 'Community & Education',
    swName: 'Jamii na Elimu',
    badge: 'Education',
    swBadge: 'Elimu',
    description: 'Direct field outreach, educational workshops, learning supplies, and child protection programs.',
    swDescription: 'Ufikiaji wa jamii, warsha za elimu, vifaa vya kujifunzia, na programu za ulinzi wa watoto.',
  },
  {
    id: 'partnerships-planning',
    name: 'Strategic Partnerships',
    swName: 'Ushirikiano na Mipango',
    badge: 'Partnership',
    swBadge: 'Ushirikiano',
    description: 'Office consultations, partner dialogues, and strategic collaboration driving systemic support.',
    swDescription: 'Mazungumzo ya kiutendaji, mashauriano na washirika, na mipango ya kusaidia jamii.',
  },
  {
    id: 'vocational-tailoring',
    name: 'Vocational Skills & Uniforms',
    swName: 'Ufundi na Sare za Shule',
    badge: 'Vocational',
    swBadge: 'Ufundi',
    description: 'Vocational tailoring center crafting school uniforms and empowering young people with life skills.',
    swDescription: 'Kituo cha ufundi cherehani kinachotengeneza sare za shule na kuwawezesha vijana ujuzi wa maisha.',
  },
];

export const galleryItems = [
  // --- Topic 1: Community & Education (0 to 8) ---
  {
    id: 0,
    src: '/images/0.JPG',
    topicId: 'community-education',
    title: 'Essential Learning Materials Distribution',
    swTitle: 'Ugawaji wa Vifaa Muhimu vya Kujifunzia',
    caption: 'Students receiving core exercise books and educational supplies directly from RECAN Foundation team members.',
    swCaption: 'Wanafunzi wakipokea madaftari na vifaa vya msingi vya kujifunzia moja kwa moja kutoka timu ya RECAN Foundation.',
    description: 'Quality education begins with the basic tools to study. RECAN Foundation provides learning supplies to vulnerable pupils in underserved community centers to ensure unbroken school attendance and motivated young minds.',
    swDescription: 'Elimu bora huanza na vifaa vya msingi vya kusomea. RECAN Foundation inatoa vifaa vya elimu kwa watoto walio katika mazingira magumu ili kuhakikisha hawakosi masomo.',
    date: 'July 2026',
    location: 'Dar es Salaam, Tanzania',
    featured: true,
  },
  {
    id: 1,
    src: '/images/1.JPG',
    topicId: 'community-education',
    title: 'Community Outreach & Family Engagement',
    swTitle: 'Ufikiaji wa Jamii na Ushirikishwaji wa Familia',
    caption: 'RECAN field volunteers listening to families and community elders to understand urgent child protection needs.',
    swCaption: 'Wajitolea wa RECAN wakisikiliza familia na viongozi wa jamii kuelewa mahitaji ya haraka ya ulinzi wa watoto.',
    description: 'Long-lasting impact starts with grassroots listening. Our field volunteers sit down with parents, guardians, and youth leaders to design responsive interventions that meet real everyday realities.',
    swDescription: 'Athari ya kudumu huanza kwa kusikiliza jamii. Wajitolea wetu hukutana na wazazi, walezi na vijana ili kubuni hatua zinazolingana na mahitaji halisi.',
    date: 'June 2026',
    location: 'Pwani, Tanzania',
    featured: false,
  },
  {
    id: 2,
    src: '/images/2.JPG',
    topicId: 'community-education',
    title: 'Rural Community Outreach Mission',
    swTitle: 'Misheni ya Ufikiaji Vijijini',
    caption: 'Facilitating a specialized rural outreach event bringing healthcare awareness and child advocacy.',
    swCaption: 'Kuendesha zoezi la ufikiaji vijijini likileta elimu ya afya na utetezi wa haki za watoto.',
    description: 'Many remote villages face barriers accessing dedicated child advocacy resources. RECAN Foundation organizes structured visits to bridge these geographic gaps and bring hope directly to families.',
    swDescription: 'Vijiji vingi vinakabiliwa na changamoto za kupata huduma za ulinzi wa watoto. RECAN husafiri kufika jamii hizi na kutoa msaada stahiki.',
    date: 'June 2026',
    location: 'Tanzania',
    featured: false,
  },
  {
    id: 3,
    src: '/images/3.JPG',
    topicId: 'community-education',
    title: 'Group Learning & Mentorship Circle',
    swTitle: 'Mzunguko wa Kujifunza na Ushauri',
    caption: 'Safe space group learning activities encouraging peer support, literacy, and creative expression.',
    swCaption: 'Mazingira salama ya shughuli za kujifunzia zinazohamasisha kusaidiana, kusoma, na ubunifu.',
    description: 'Beyond textbook study, children flourish when they have supportive peer circles. Group learning sessions build self-worth, mutual kindness, and strong social bonds.',
    swDescription: 'Mbali na vitabu, watoto hukua vizuri wanapokuwa na mazingira rafiki ya kujifunza pamoja na wenzao, wakijenga ujasiri na mshikamano.',
    date: 'May 2026',
    location: 'Dar es Salaam, Tanzania',
    featured: false,
  },
  {
    id: 4,
    src: '/images/4.JPG',
    topicId: 'community-education',
    title: 'Interactive Child Development Workshop',
    swTitle: 'Warsha ya Maendeleo ya Mtoto',
    caption: 'Children participating in an engaging educational workshop centered on child rights and creativity.',
    swCaption: 'Watoto wakishiriki katika warsha ya elimu inayolenga haki za mtoto na kukuza ubunifu.',
    description: 'Empowering children to know their inherent rights and express their aspirations creates confident future leaders. Our workshops use creative storytelling and interactive exercises.',
    swDescription: 'Kuwasaidia watoto kutambua haki zao na kueleza ndoto zao kunajenga viongozi wenye ujasiri wa siku zijazo.',
    date: 'May 2026',
    location: 'Dar es Salaam, Tanzania',
    featured: true,
  },
  {
    id: 5,
    src: '/images/5.JPG',
    topicId: 'community-education',
    title: 'On-Site Foundation Leadership Coordination',
    swTitle: 'Uratibu wa Viongozi Eneo la Tukio',
    caption: 'Foundation directors coordinating on-site support logistics to ensure transparent, direct aid delivery.',
    swCaption: 'Viongozi wa taasisi wakiratibu ugawaji wa misaada kwa ufanisi na uwazi.',
    description: 'Active leadership presence on the ground ensures accountability and that community aid reaches the most vulnerable children without administrative delay.',
    swDescription: 'Uwepo wa viongozi uwanjani unathibitisha uwajibikaji na kuhakikisha msaada unawafikia walengwa bila vikwazo.',
    date: 'April 2026',
    location: 'Tanzania',
    featured: false,
  },
  {
    id: 6,
    src: '/images/6.JPG',
    topicId: 'community-education',
    title: 'Family Resource Handover Ceremony',
    swTitle: 'Hafla ya Kukabidhi Vifaa kwa Familia',
    caption: 'RECAN representatives presenting vital educational and nutrition packages to vulnerable households.',
    swCaption: 'Wawakilishi wa RECAN wakikabidhi vifurushi vya lishe na elimu kwa kaya zilizo hatarini.',
    description: 'A holistic safety net supports both the child and their caregivers. By providing key household resources, RECAN helps stabilize family environments so children stay safely in school.',
    swDescription: 'Ulinzi kamili humgusa mtoto na mlezi wake. Kwa kutoa misaada hii, RECAN husaidia familia kuwa imara ili watoto waendelee kusoma kwa amani.',
    date: 'April 2026',
    location: 'Tanzania',
    featured: false,
  },
  {
    id: 7,
    src: '/images/7.jpeg',
    topicId: 'community-education',
    title: 'Celebration of Hope & Community Spirit',
    swTitle: 'Sherehe ya Tumaini na Mshikamano wa Jamii',
    caption: 'Gathering with young beneficiaries, care workers, and community mentors celebrating restored milestones.',
    swCaption: 'Kukusanyika pamoja na watoto, walezi, na washauri kusherehekea hatua zilizopigwa.',
    description: 'Every milestone reached deserves recognition. Celebrations bring joy and reaffirm the dignity and belonging of every child nurtured through RECAN initiatives.',
    swDescription: 'Kila hatua ya mafanikio inastahili kusherehekewa. Sherehe hizi huleta furaha na kuthibitisha thamani ya kila mtoto katika jamii.',
    date: 'March 2026',
    location: 'Tanzania',
    featured: true,
  },
  {
    id: 8,
    src: '/images/8.JPG',
    topicId: 'community-education',
    title: 'Community Voices & Impact Stories',
    swTitle: 'Sauti za Jamii na Hadithi za Mafanikio',
    caption: 'Caregivers and local leaders sharing positive outcomes and transformation observed in their neighborhoods.',
    swCaption: 'Walezi na viongozi wa mitaa wakieleza mabadiliko chanya na manufaa yanayoonekana katika jamii.',
    description: 'The real measure of our success is the voice of the community. Listening to firsthand testimonies inspires future program expansion and sustains trust.',
    swDescription: 'Kipimo halisi cha mafanikio ni sauti ya jamii yenyewe. Ushuhuda wa wananchi unatupa nguvu ya kupanua zaidi miradi yetu.',
    date: 'March 2026',
    location: 'Tanzania',
    featured: false,
  },

  // --- Topic 2: Strategic Partnerships & Dialogue (9 to 11) ---
  {
    id: 9,
    src: '/images/9.jpeg',
    topicId: 'partnerships-planning',
    title: 'Community Stakeholder Consultation',
    swTitle: 'Mashauriano na Wadau wa Jamii',
    caption: 'In-depth consultation at the RECAN Foundation office discussing tailored community support frameworks.',
    swCaption: 'Kikao cha mashauriano katika ofisi ya RECAN kujadili mikakati ya msaada wa kijamii.',
    description: 'Strategic program planning begins with detailed one-on-one sessions. Staff members review beneficiary progress and collaborate on effective intervention plans.',
    swDescription: 'Upangaji makini wa miradi unahitaji vikao vya kina vya meza moja. Timu inatathmini maendeleo na kuweka mikakati thabiti.',
    date: 'February 2026',
    location: 'RECAN Office, Dar es Salaam',
    featured: false,
  },
  {
    id: 10,
    src: '/images/10.jpeg',
    topicId: 'partnerships-planning',
    title: 'Strategic Alliance Handshake',
    swTitle: 'Kushikana Mikono kwa Ushirikiano wa Kimkakati',
    caption: 'RECAN Foundation representative cementing collaborative ties with community advocacy allies.',
    swCaption: 'Mwakilishi wa RECAN Foundation akiimarisha ushirikiano na wadau wa utetezi wa jamii.',
    description: 'Sustainable child protection requires strong networks. By partnering with dedicated grassroots advocates, RECAN expands its reach and secures lasting protection nets for vulnerable children.',
    swDescription: 'Ulinzi wa kudumu wa watoto unategemea mitandao thabiti ya ushirikiano. Ushirikiano na wadau unaleta matokeo makubwa zaidi.',
    date: 'February 2026',
    location: 'RECAN Office, Dar es Salaam',
    featured: true,
  },
  {
    id: 11,
    src: '/images/11.jpeg',
    topicId: 'partnerships-planning',
    title: 'Program Planning & Resource Review',
    swTitle: 'Mipango ya Miradi na Mapitio ya Rasilimali',
    caption: 'Coordinating upcoming outreach schedules, program timelines, and beneficiary resource allocations.',
    swCaption: 'Kuratibu ratiba za miradi ijayo na ugawaji wa rasilimali kwa walengwa.',
    description: 'Careful operational preparation ensures that every donor shilling and volunteer hour directly creates tangible benefit for children and mothers in need.',
    swDescription: 'Maandalizi makini ya kiutendaji yanahakikisha kila rasilimali inaleta faida ya wazi kwa watoto na wazazi wanaohitaji.',
    date: 'January 2026',
    location: 'RECAN Office, Dar es Salaam',
    featured: false,
  },

  // --- Topic 3: Vocational Skills & Uniforms (12 to 15) ---
  {
    id: 12,
    src: '/images/12.jpeg',
    topicId: 'vocational-tailoring',
    title: 'School Uniform Production & Fabric Inspection',
    swTitle: 'Uzalishaji wa Sare za Shule na Ukaguzi wa Vitambaa',
    caption: 'Inspecting high-grade fabric and tailoring school uniforms for vulnerable students preparing for the academic year.',
    swCaption: 'Kukagua vitambaa bora na kushona sare za wanafunzi wanaojiandaa kuanza masomo.',
    description: 'Without a proper school uniform, many impoverished children feel excluded or face barriers to attending class. Our tailoring initiative produces dignified, durable uniforms to keep children learning proudly.',
    swDescription: 'Bila sare nzuri, watoto wengi hukosa kujiamini au hushindwa kuhudhuria masomo. Mradi wetu unashona sare nadhifu ili watoto wasome kwa heshima.',
    date: 'January 2026',
    location: 'Vocational Workshop, Tanzania',
    featured: false,
  },
  {
    id: 13,
    src: '/images/13.jpeg',
    topicId: 'vocational-tailoring',
    title: 'Vocational Sewing & Dress Assembly',
    swTitle: 'Ufundi Cherehani na Ushonaji wa Sare',
    caption: 'Workshop mentors and trainees assembling quality school dresses on industrial machines.',
    swCaption: 'Wakufunzi na wanagenzi wakishona sare bora za wasichana kwa mashine za kisasa.',
    description: 'In tandem with outfitting schoolchildren, this initiative provides young mothers and youth with hands-on tailoring vocations, giving them practical trades to achieve financial self-reliance.',
    swDescription: 'Pamoja na kuwasaidia wanafunzi, mradi huu unawapa kina mama vijana ujuzi wa cherehani ili waweze kujikimu kiuchumi.',
    date: 'January 2026',
    location: 'Vocational Workshop, Tanzania',
    featured: true,
  },
  {
    id: 14,
    src: '/images/14.jpeg',
    topicId: 'vocational-tailoring',
    title: 'Garment Finishing & Quality Verification',
    swTitle: 'Umaliziaji wa Sare na Uhakiki wa Ubora',
    caption: 'Reviewing stitching details and measurements to ensure tailored garments fit comfortably and last.',
    swCaption: 'Kukagua ushonaji na vipimo kuhakikisha sare zinawakaa watoto vizuri na kudumu kwa muda mrefu.',
    description: 'Every uniform handed to a child is crafted with love, precision, and respect, reinforcing that every young student matters and deserves the highest standard of support.',
    swDescription: 'Kila sare inayokabidhiwa kwa mtoto inashonwa kwa uangalifu na heshima, ikionyesha kwamba kila mtoto anastahili huduma bora.',
    date: 'January 2026',
    location: 'Vocational Workshop, Tanzania',
    featured: false,
  },
  {
    id: 15,
    src: '/images/15.jpeg',
    topicId: 'vocational-tailoring',
    title: 'Active Tailoring Production Line',
    swTitle: 'Kazi ya Ushonaji Ikiendelea Kikamilifu',
    caption: 'Artisans, trainers, and coordinators working side-by-side at tailoring stations to meet student needs.',
    swCaption: 'Mafundi, wakufunzi, na waratibu wakifanya kazi kwa pamoja kukamilisha sare za watoto.',
    description: 'A vibrant workshop in action where community empowerment meets direct student aid. Local artisans and apprentice youth collaborate to create hundreds of school outfits.',
    swDescription: 'Kituo chenye ari ya kazi ambapo uwezeshaji wa jamii unakutana na msaada wa moja kwa moja kwa wanafunzi.',
    date: 'January 2026',
    location: 'Vocational Workshop, Tanzania',
    featured: true,
  },
];

/**
 * Helper query functions
 */
export const getAllImages = () => {
  return [...galleryItems].sort((a, b) => a.id - b.id);
};

export const getFeaturedImages = (limit = 6) => {
  const featured = galleryItems.filter((item) => item.featured);
  return featured.slice(0, limit);
};

export const getImagesByTopic = (topicId) => {
  if (!topicId || topicId === 'all') {
    return getAllImages();
  }
  return galleryItems.filter((item) => item.topicId === topicId).sort((a, b) => a.id - b.id);
};

export const getTopicById = (topicId) => {
  return galleryTopics.find((topic) => topic.id === topicId) || galleryTopics[0];
};

export const getTopicCounts = () => {
  const counts = { all: galleryItems.length };
  galleryTopics.forEach((topic) => {
    if (topic.id !== 'all') {
      counts[topic.id] = galleryItems.filter((item) => item.topicId === topic.id).length;
    }
  });
  return counts;
};

