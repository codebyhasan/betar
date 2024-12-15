// This array is used to store radio stations. It serves as a backup for these stations, which are not currently part of the project.


const stations = [
  {
    category: "ঢাকা এএম (Dhaka AM)",
    channels: [
      { name: "ঢাকা-ক (৬৯৩ কিলোহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkka/stream" },
      { name: "ঢাকা-খ (৮১৯ কিলোহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkkha/stream" },
      { name: "বাণিজ্যিক কার্যক্রম (৬৩০ কিলোহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkcom/stream" },
      { name: "বহির্বিশ্ব কার্যক্রম", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkboh/stream" },
    ],
  },
  {
    category: "ঢাকা এফএম (Dhaka FM)",
    channels: [
      { name: "ট্রাফিক সম্প্রচার কার্যক্রম (৮৮-৮ মেগাহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdktraf/stream" },
      { name: "বাণিজ্যিক কার্যক্রম (১০৪ মেগাহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkcom2/stream" },
      { name: "ঢাকা এফএম (৯০-০ মেগাহার্জ)", stream: "http://as1.digitalsynapsebd.com:8000/stream?type=http&nocache=155" },
    ],
  },
  {
    category: "চট্টগ্রাম (Chittagong)",
    channels: [
      { name: "এএম ৮৭৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbctgmw/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbctgfm/stream" },
    ],
  },
  {
    category: "খুলনা (Khulna)",
    channels: [
      { name: "এএম ৫৫৮ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbkulam/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbkulfm/stream" },
    ],
  },
  {
    category: "রাজশাহী (Rajshahi)",
    channels: [
      { name: "এএম ১০৮০ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrajmw/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrajfm/stream" },
    ],
  },
  {
    category: "রংপুর (Rangpur)",
    channels: [
      { name: "এএম ১০৫৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbranam/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ, ১০৫-৬ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbranfm/stream" },
    ],
  },
  {
    category: "সিলেট (Sylhet)",
    channels: [
      { name: "এএম ৯৬৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbsylham/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbsylhfm/stream" },
    ],
  },
  {
    category: "বরিশাল (Barisal)",
    channels: [
      { name: "এএম ১২৮৭ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbbaram/stream" },
      { name: "এফএম ১০৫-২ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbbarfm/stream" },
    ],
  },
  {
    category: "কক্সবাজার (Cox's Bazar)",
    channels: [
      { name: "এএম ১৩১৪ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcoxam/stream" },
      { name: "এফএম ১০০-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcoxfm/stream" },
    ],
  },
  {
    category: "বান্দরবান (Bandarban)",
    channels: [
      { name: "এএম ১৪৩১ কিলোহার্জ", stream: "http://as1.digitalsynapsebd.com/proxy/bbbanam/stream" },
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "http://as1.digitalsynapsebd.com/proxy/bbbanfm/stream" },
    ],
  },
  {
    category: "ঠাকুরগাঁও (Thakurgaon)",
    channels: [
      { name: "এএম ৯৯৯ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbthaam/stream" },
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbthafm/stream" },
    ],
  },
  {
    category: "রাঙামাটি (Rangamati)",
    channels: [
      { name: "এএম ১১৬১ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrangam/stream" },
      { name: "এফএম ১০৩-২ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrangfm/stream" },
    ],
  },
  {
    category: "কুমিল্লা (Comilla)",
    channels: [
      { name: "এএম ১৪১৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcumam/stream" },
      { name: "এফএম ১০৩-৬ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcumfm/stream" },
    ],
  },
  {
    category: "ময়মনসিংহ (Mymensingh)",
    channels: [
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbmymfm/stream" },
    ],
  },
  {
    category: "গোপালগঞ্জ (Gopalganj)",
    channels: [
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbgopfm/stream" },
    ],
  },
  {
    category: "পরীক্ষামূলক (Experimental)",
    channels: [
      { name: "পরীক্ষামূলক", stream: "https://as1.digitalsynapsebd.com/proxy/experimental/stream" },
    ],
  },
];


