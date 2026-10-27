export const site = {
  name: 'LH Assistência Técnica',
  shortName: 'LH',
  tagline: 'Referência em reparo de placa no Vale do Aço',
  headline: 'Seu aparelho nas mãos de quem entende de verdade.',
  subhead:
    'Laboratório completo para iPhone, iPad e smartphones. Da recepção ao reparo, cada detalhe é pensado para que você tenha confiança e segurança.',
  phone: '(31) 98545-9188',
  phoneHref: 'tel:+5531985459188',
  whatsapp: '5531985459188',
  whatsappMsg: encodeURIComponent(
    'Olá! Vim pelo site da LH Assistência Técnica e gostaria de um orçamento.',
  ),
  instagram: 'https://www.instagram.com/lhassistencia/',
  youtube: 'https://www.youtube.com/@lhassistencia',
  tiktok: 'https://www.tiktok.com/@lucaashenriqu',
  googleReview: 'https://www.google.com/search?kgmid=/g/11g0j4050w&hl=pt-BR&q=LH+Assist%C3%AAncia+T%C3%A9cnica&shem=epsd1,esd2e,ltae,rimspwouoe,sdpie&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=1fcd566d27a4b071&utm_source=epsd1,esd2e,ltae,rimspwouoe,sdpie,sh/x/loc/osrp/m5/1#lrd=0xa5516a79bc4679:0xa57897222dd1c6a2,3,,,,',
  address: 'Av. Acesita, 3531 — São José',
  city: 'Timóteo — MG',
  cep: '35182-132',
  mapsEmbed:
    'https://maps.google.com/maps?q=-19.5793288,-42.6425576&z=16&output=embed',
  mapsDir:
    'https://www.google.com/maps/dir/?api=1&destination=-19.5793288,-42.6425576',
  hours: [
    { day: 'Segunda a sexta-feira', time: 'das 8h às 18h' },
    { day: 'Sábado', time: 'das 8h às 13h' },
    { day: 'Domingo', time: 'fechado' },
  ],
  founded: '2017',
}

export const services = [
  {
    id: 'placa',
    title: 'Reparo de placa',
    text: 'Microsolda, reballing de CPU, recuperação de pads e diagnóstico avançado em iPhone e Android.',
  },
  {
    id: 'tela',
    title: 'Tela e touch',
    text: 'Troca de display com peças selecionadas, calibração e teste completo do touch, True Tone e Face ID.',
  },
  {
    id: 'bateria',
    title: 'Bateria e carga',
    text: 'Troca de bateria, conector de carga e IC de carregamento, além do diagnóstico de aparelhos que não ligam ou desligam sozinhos.',
  },
  {
    id: 'wifi',
    title: 'Wi-Fi, Bluetooth e RF',
    text: 'Correção de falhas de rede, swap de RF, interposer e recuperação de sinal em modelos Apple.',
  },
  {
    id: 'oxida',
    title: 'Oxidação e contato com líquidos',
    text: 'Limpeza ultrassônica, tratamento de oxidação e recuperação de placas molhadas com protocolo de laboratório.',
  },
  {
    id: 'audio',
    title: 'Áudio e câmera',
    text: 'Reparo de codec, microfone, alto-falante e câmera, além de serviços relacionados ao Face ID, com peças testadas e garantia no serviço.',
  },
]

export const differentials = [
  { value: '2017', label: 'No Vale do Aço' },
  { value: 'Apple', label: 'Foco em placa' },
  { value: 'Lab', label: 'Completo na loja' },
  { value: 'OS', label: 'Com garantia' },
]

export const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Avaliamos o aparelho na bancada e explicamos a causa real do problema.',
  },
  {
    n: '02',
    title: 'Orçamento',
    text: 'Você recebe o valor e o prazo antes de qualquer reparo. Sem surpresas.',
  },
  {
    n: '03',
    title: 'Reparo',
    text: 'Microsolda, substituição de peças e testes realizados no laboratório da própria loja.',
  },
  {
    n: '04',
    title: 'Entrega',
    text: 'Aparelho testado, limpo e com garantia. Mais do que conserto: uma solução.',
  },
]

export const testimonials = [
  {
    name: 'Camila R.',
    city: 'Timóteo',
    text: 'Meu iPhone não ligava depois de cair na água. Recuperaram a placa e ainda salvaram as fotos. Atendimento honesto.',
  },
  {
    name: 'Thiago M.',
    city: 'Coronel Fabriciano',
    text: 'Já tinha passado em duas lojas por causa do Wi-Fi. Aqui acharam o defeito na placa e resolveram de primeira.',
  },
  {
    name: 'Patrícia S.',
    city: 'Ipatinga',
    text: 'Troquei a tela e a bateria. Ficou perfeito, sem toques fantasmas no touch. Recomendo demais.',
  },
  {
    name: 'Eduardo L.',
    city: 'Timóteo',
    text: 'O laboratório é organizado e o pessoal explica tudo. Passei a indicar para a família inteira.',
  },
]
