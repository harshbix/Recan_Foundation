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
    date: '2026',
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
    date: '2026',
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
    date: '2026',
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
    date: '2026',
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
    date: '2026',
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
    date: '2026',
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
    date: '2026',
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
    date: '2026',
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
    date: '2026',
    location: 'Tanzania',
    featured: false,
  },

  // --- Topic 2: Strategic Partnerships & Dialogue (9 to 11) ---
  {
    id: 9,
    src: '/images/9.jpeg',
    topicId: 'partnerships-planning',
    title: 'Executive Consultation with Hopevilla Foundation',
    swTitle: 'Mkutano wa Uongozi na Taasisi ya Hopevilla',
    caption: 'Executive Director and Secretary of RECAN Foundation Ms. Christina Njau (left) meeting with local NGO Director and Founder of Hopevilla Foundation Ms. Tunu Migila.',
    swCaption: 'Mkurugenzi Mtendaji na Katibu wa RECAN Foundation Bi. Christina Njau (kushoto) akikutana ofisini na Mkurugenzi na Mwanzilishi wa Hopevilla Foundation Bi. Tunu Migila.',
    description: 'Executive Director and Secretary of RECAN Foundation Ms. Christina Njau (on the left) met today at her office with local NGO Director and Founder of Hopevilla Foundation Ms. Tunu Migila to establish strategic collaboration and community partnerships.',
    swDescription: 'Mkurugenzi Mtendaji na Katibu wa RECAN Foundation Bi. Christina Njau (kushoto) alikutana ofisini kwake na Mkurugenzi na Mwanzilishi wa Hopevilla Foundation Bi. Tunu Migila kuweka mikakati ya pamoja ya kusaidia jamii.',
    date: '2026',
    location: 'RECAN Office, Dar es Salaam',
    featured: false,
  },
  {
    id: 10,
    src: '/images/10.jpeg',
    topicId: 'partnerships-planning',
    title: 'Street Children Mindset & Mental Health Alliance',
    swTitle: 'Mpango wa Saikolojia na Afya ya Akili kwa Watoto wa Mtaani',
    caption: 'Founder of RECAN Foundation Ms. Christina Njau (left) discussing and exchanging ideas with Founder of Hopevilla Foundation Ms. Tunu Migila (right).',
    swCaption: 'Mwanzilishi wa RECAN Foundation Bi. Christina Njau (kushoto) akibadilishana mawazo na Mwanzilishi wa Hopevilla Foundation Bi. Tunu Migila (kulia).',
    description: 'Founder of RECAN Foundation Ms. Christina Njau (left) discussing and exchanging ideas with Founder of Hopevilla Foundation Ms. Tunu Migila (right), with discussions based on how to help street children through mindset transformation and mental health programs.',
    swDescription: 'Mwanzilishi wa RECAN Foundation Bi. Christina Njau (kushoto) akijadiliana na kubadilishana mawazo na Mwanzilishi wa Hopevilla Foundation Bi. Tunu Migila (kulia), mazungumzo yakilenga jinsi ya kuwasaidia watoto wa mtaani kupitia programu za kubadili mtazamo na afya ya akili.',
    date: '2026',
    location: 'RECAN Office, Dar es Salaam',
    featured: true,
  },
  {
    id: 11,
    src: '/images/11.jpeg',
    topicId: 'partnerships-planning',
    title: 'Collaborative Outreach Planning & Implementation',
    swTitle: 'Mipango ya Utekelezaji wa Miradi ya Pamoja',
    caption: 'Ms. Christina Njau and Ms. Tunu Migila coordinating operational frameworks and intervention timelines for street children outreach.',
    swCaption: 'Bi. Christina Njau na Bi. Tunu Migila wakiratibu mikakati ya kiutendaji na ratiba za ufikiaji wa watoto wa mtaani.',
    description: 'Building on their strategic dialogue, Ms. Christina Njau and Ms. Tunu Migila coordinate upcoming outreach schedules, program timelines, and beneficiary resource allocations to ensure tangible, direct benefit for street children and mothers in need.',
    swDescription: 'Wakikamilisha mazungumzo yao ya kimkakati, Bi. Christina Njau na Bi. Tunu Migila wanaratibu ratiba na rasilimali ili kuhakikisha kila hatua inaleta mabadiliko ya kweli kwa watoto walio katika mazingira magumu.',
    date: '2026',
    location: 'RECAN Office, Dar es Salaam',
    featured: false,
  },

  // --- Topic 3: Vocational Skills & Uniforms (12 to 15) ---
  {
    id: 12,
    src: '/images/12.jpeg',
    topicId: 'vocational-tailoring',
    title: 'School Uniform Supply Partnership: Fabric Review',
    swTitle: 'Ushirikiano wa Sare za Shule: Ukaguzi wa Vitambaa',
    caption: 'The Executive Director of RECAN Foundation and businesswoman Ms. Frida Mmary inspecting uniform fabrics and materials.',
    swCaption: 'Mkurugenzi Mtendaji wa RECAN Foundation na mfanyabiashara Bi. Frida Mmary wakikagua vitambaa vya sare za shule.',
    description: 'RECAN Foundation Update 🤝\n\nThe Executive Director of RECAN Foundation met with businesswoman Ms. Frida Mmary to discuss a potential partnership for the supply of school uniforms to children sponsored and supported by RECAN Foundation.\n\nThe meeting focused on exploring practical ways to support vulnerable children and ensure they have the essential school requirements needed to attend school with dignity, confidence, and a sense of belonging.\n\nWe are grateful for individuals and partners who are willing to contribute to creating better educational opportunities for children. Together, we can make a difference. 💙\n\n#RECANFoundation #EducationForAll #SupportingChildren #SchoolUniforms #ChildDevelopment #CommunitySupport #PartnershipForChange',
    swDescription: 'Taarifa ya RECAN Foundation 🤝\n\nMkurugenzi Mtendaji wa RECAN Foundation alikutana na mfanyabiashara Bi. Frida Mmary kujadili ushirikiano unaowezekana wa kusambaza sare za shule kwa watoto wanaofadhiliwa na kusaidiwa na RECAN Foundation.\n\nMkutano huo ulilenga kuchunguza njia za kiutendaji za kusaidia watoto walio katika mazingira magumu na kuhakikisha wanapata mahitaji muhimu ya shule ili kuhudhuria masomo kwa heshima, kujiamini, na kuwa na hisia ya kuthaminiwa.\n\nTunawashukuru watu binafsi na washirika walio tayari kuchangia katika kuunda fursa bora za elimu kwa watoto. Kwa pamoja, tunaweza kuleta mabadiliko. 💙\n\n#RECANFoundation #ElimuKwaWote #KusaidiaWatoto #SareZaShule #MaendeleoYaMtoto #MsaadaWaJamii #UshirikianoWaMabadiliko',
    date: '2026',
    location: 'Vocational Workshop, Tanzania',
    featured: false,
  },
  {
    id: 13,
    src: '/images/13.jpeg',
    topicId: 'vocational-tailoring',
    title: 'School Uniform Partnership: Dress Production',
    swTitle: 'Ushirikiano wa Sare za Shule: Ushonaji wa Sare',
    caption: 'The Executive Director of RECAN Foundation meeting with Ms. Frida Mmary examining completed school uniform dresses.',
    swCaption: 'Mkurugenzi Mtendaji wa RECAN Foundation na Bi. Frida Mmary wakikagua sare zilizokamilika za shule.',
    description: 'RECAN Foundation Update 🤝\n\nThe Executive Director of RECAN Foundation met with businesswoman Ms. Frida Mmary to discuss a potential partnership for the supply of school uniforms to children sponsored and supported by RECAN Foundation.\n\nThe meeting focused on exploring practical ways to support vulnerable children and ensure they have the essential school requirements needed to attend school with dignity, confidence, and a sense of belonging.\n\nWe are grateful for individuals and partners who are willing to contribute to creating better educational opportunities for children. Together, we can make a difference. 💙\n\n#RECANFoundation #EducationForAll #SupportingChildren #SchoolUniforms #ChildDevelopment #CommunitySupport #PartnershipForChange',
    swDescription: 'Taarifa ya RECAN Foundation 🤝\n\nMkurugenzi Mtendaji wa RECAN Foundation alikutana na mfanyabiashara Bi. Frida Mmary kujadili ushirikiano unaowezekana wa kusambaza sare za shule kwa watoto wanaofadhiliwa na kusaidiwa na RECAN Foundation.\n\nMkutano huo ulilenga kuchunguza njia za kiutendaji za kusaidia watoto walio katika mazingira magumu na kuhakikisha wanapata mahitaji muhimu ya shule ili kuhudhuria masomo kwa heshima, kujiamini, na kuwa na hisia ya kuthaminiwa.\n\nTunawashukuru watu binafsi na washirika walio tayari kuchangia katika kuunda fursa bora za elimu kwa watoto. Kwa pamoja, tunaweza kuleta mabadiliko. 💙\n\n#RECANFoundation #ElimuKwaWote #KusaidiaWatoto #SareZaShule #MaendeleoYaMtoto #MsaadaWaJamii #UshirikianoWaMabadiliko',
    date: '2026',
    location: 'Vocational Workshop, Tanzania',
    featured: true,
  },
  {
    id: 14,
    src: '/images/14.jpeg',
    topicId: 'vocational-tailoring',
    title: 'School Uniform Quality & Supply Review',
    swTitle: 'Ukaguzi wa Ubora na Usambazaji wa Sare za Shule',
    caption: 'Exploring practical ways to supply durable school uniforms to children sponsored and supported by RECAN Foundation.',
    swCaption: 'Kuchunguza njia za kiutendaji za kutoa sare bora za shule kwa watoto wanaofadhiliwa na RECAN Foundation.',
    description: 'RECAN Foundation Update 🤝\n\nThe Executive Director of RECAN Foundation met with businesswoman Ms. Frida Mmary to discuss a potential partnership for the supply of school uniforms to children sponsored and supported by RECAN Foundation.\n\nThe meeting focused on exploring practical ways to support vulnerable children and ensure they have the essential school requirements needed to attend school with dignity, confidence, and a sense of belonging.\n\nWe are grateful for individuals and partners who are willing to contribute to creating better educational opportunities for children. Together, we can make a difference. 💙\n\n#RECANFoundation #EducationForAll #SupportingChildren #SchoolUniforms #ChildDevelopment #CommunitySupport #PartnershipForChange',
    swDescription: 'Taarifa ya RECAN Foundation 🤝\n\nMkurugenzi Mtendaji wa RECAN Foundation alikutana na mfanyabiashara Bi. Frida Mmary kujadili ushirikiano unaowezekana wa kusambaza sare za shule kwa watoto wanaofadhiliwa na kusaidiwa na RECAN Foundation.\n\nMkutano huo ulilenga kuchunguza njia za kiutendaji za kusaidia watoto walio katika mazingira magumu na kuhakikisha wanapata mahitaji muhimu ya shule ili kuhudhuria masomo kwa heshima, kujiamini, na kuwa na hisia ya kuthaminiwa.\n\nTunawashukuru watu binafsi na washirika walio tayari kuchangia katika kuunda fursa bora za elimu kwa watoto. Kwa pamoja, tunaweza kuleta mabadiliko. 💙\n\n#RECANFoundation #ElimuKwaWote #KusaidiaWatoto #SareZaShule #MaendeleoYaMtoto #MsaadaWaJamii #UshirikianoWaMabadiliko',
    date: '2026',
    location: 'Vocational Workshop, Tanzania',
    featured: false,
  },
  {
    id: 15,
    src: '/images/15.jpeg',
    topicId: 'vocational-tailoring',
    title: 'Tailoring Workshop Partnership for Sponsored Children',
    swTitle: 'Ushirikiano wa Karakana ya Ushonaji kwa Watoto Wanaofadhiliwa',
    caption: 'The Executive Director of RECAN Foundation and Ms. Frida Mmary at the tailoring workshop with local artisans.',
    swCaption: 'Mkurugenzi Mtendaji wa RECAN Foundation na Bi. Frida Mmary katika karakana ya ushonaji na mafundi wa eneo husika.',
    description: 'RECAN Foundation Update 🤝\n\nThe Executive Director of RECAN Foundation met with businesswoman Ms. Frida Mmary to discuss a potential partnership for the supply of school uniforms to children sponsored and supported by RECAN Foundation.\n\nThe meeting focused on exploring practical ways to support vulnerable children and ensure they have the essential school requirements needed to attend school with dignity, confidence, and a sense of belonging.\n\nWe are grateful for individuals and partners who are willing to contribute to creating better educational opportunities for children. Together, we can make a difference. 💙\n\n#RECANFoundation #EducationForAll #SupportingChildren #SchoolUniforms #ChildDevelopment #CommunitySupport #PartnershipForChange',
    swDescription: 'Taarifa ya RECAN Foundation 🤝\n\nMkurugenzi Mtendaji wa RECAN Foundation alikutana na mfanyabiashara Bi. Frida Mmary kujadili ushirikiano unaowezekana wa kusambaza sare za shule kwa watoto wanaofadhiliwa na kusaidiwa na RECAN Foundation.\n\nMkutano huo ulilenga kuchunguza njia za kiutendaji za kusaidia watoto walio katika mazingira magumu na kuhakikisha wanapata mahitaji muhimu ya shule ili kuhudhuria masomo kwa heshima, kujiamini, na kuwa na hisia ya kuthaminiwa.\n\nTunawashukuru watu binafsi na washirika walio tayari kuchangia katika kuunda fursa bora za elimu kwa watoto. Kwa pamoja, tunaweza kuleta mabadiliko. 💙\n\n#RECANFoundation #ElimuKwaWote #KusaidiaWatoto #SareZaShule #MaendeleoYaMtoto #MsaadaWaJamii #UshirikianoWaMabadiliko',
    date: '2026',
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

