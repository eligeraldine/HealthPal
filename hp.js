
const allDiseases = [
    // Page 1 (A)
    ["Abses hati", "Abses peritonsil", "Abses retrofaring", "Acne keloidalis"],
    ["Alergi", "Amenorea", "Aneurisma aorta", "Angina pektoris"],
    ["Angiosarkoma", "Apnea", "Asidosis", "Aspergilosis"],
    ["Atelektasis", "Adenoma", "Agranulositosis", "Astenia"],

    // Page 2 (B)
    ["Batu ginjal", "Bronkitis", "Bulimia", "Beri-beri"],
    ["Bursitis", "Bell's palsy", "Bronkiektasis", "Blefaritis"],
    ["Brucellosis", "Bronkopneumonia", "Bakteremia", "Balanitis"],
    ["Bursitis trochanterica", "Benign prostatic hyperplasia", "Bila", "Bengkak"],

    // Page 3 (C)
    ["Cacar air", "Candidiasis", "Cangkrang", "Celiac"],
    ["Cedera otak", "Cerita", "Cervicitis", "Chagas disease"],
    ["Cholecystitis", "Cloasma", "Cystitis", "Cytomegalovirus"],
    ["Cystic fibrosis", "Cytotoxic", "Cystadenoma", "Cryoglobulinemia"],

    // Page 4 (D)
    ["Demam berdarah", "Diabetes", "Disentri", "Disleksia"],
    ["Dermatitis", "Difteria", "Depresi", "Demam tifoid"],
    ["Disfungsi ereksi", "Dengue", "Diskinesia", "Distrofi otot"],
    ["Dengue", "Duktus", "Dera", "Dermatofibrosarcoma"],

    // Page 5 (E)
    ["Erysipelas", "Escherichia coli", "Ebola", "Endometriosis"],
    ["Encephalitis", "Esofagitis", "Eritema", "Eritropoietin"],
    ["Eksim", "Emboli", "Endocarditis", "Enteritis"],
    ["Ereksi, Disfungsi", "Erythropoietic protoporphyria", "Ectopic pregnancy", "Edema"],

    // Page 6 (F)
    ["Fibromyalgia", "Flu", "Fobia", "Fungal infection"],
    ["Fraktur", "Faringitis", "Fatty liver", "Folikulitis"],
    ["Fistula ani", "Fibrosis paru", "Gastritis", "Gagal ginjal"],
    ["Ganglion", "Gingivitis", "Glaukoma", "Gagal jantung"],

    // Page 7 (G)
    ["Hepatitis", "HIV", "Herpes zoster", "Hipertensi"],
    ["Hemofilia", "Hernia", "Hepatoma", "Hepatitis B"],
    ["Hepatitis C", "Hiperemesis gravidarum", "Infeksi saluran kemih", "Influenza"],
    ["Impetigo", "Insomnia", "Iritasi mata", "Inkontinensia urin"],

    // Page 8 (H)
    ["Jantung koroner", "Jaundice", "Jerawat", "Jantung bengkak"],
    ["Jari patah", "Jangkitan kulit", "Jari trigger", "Jantung bocor"],
    ["Jari manis bengkok", "Jantung lemah", "Kanker payudara", "Kanker serviks"],
    ["Kista ovarium", "Kolesterol tinggi", "Kista ginjal", "Katarak"],

    // Page 9 (I)
    ["Leukemia", "Lupus", "Laringitis", "Limfoma"],
    ["Lupus eritematosus", "Lemah jantung", "Leprosi", "Lipoma"],
    ["Lutut patah", "Luka bakar", "Migraine", "Multiple sclerosis"],
    ["Mumps", "Malaria", "Melanoma", "Mieloma"],

    // Page 10 (J)
    ["Neuritis optik", "Nekrosis", "Neoplasma", "Narkolepsi"],
    ["Neutropenia", "Neuralgia", "Neurodermatitis", "Nefritis"],
    ["Nasofaringitis", "Nefropati", "Obesitas", "Osteoartritis"],
    ["Osteoporosis", "Otitis media", "Orkitis", "Osteosarkoma"],

    // Page 11 (K)
    ["Pneumonia", "Psoriasis", "Penyakit paru-paru", "Pleuritis"],
    ["Polio", "Penyakit Parkinson", "Penyakit Crohn", "Preeklampsia"],
    ["Penyakit Lyme", "Paronikia", "Quinsy", "Quiste sebáceo"],
    ["Queratitis", "Quiste Baker", "Queratocono", "Quiste del conducto tirogloso"],

    // Page 12 (L)
    ["Radang tenggorokan", "Rematik", "Rinitis", "Rosacea"],
    ["Rabies", "Radang paru-paru", "Retinitis pigmentosa", "Radikulopati"],
    ["Ruptur tendon", "Ruam", "Sakit kepala", "Sinusitis"],
    ["Skoliosis", "Stroke", "Sirosis", "Syok septik"],

    // Page 13 (M)
    ["TBC", "Tetanus", "Tiroiditis", "Tifoid"],
    ["Trombositopenia", "Trombosis", "Tonsilitis", "Trikomoniasis"],
    ["Tuberkulosis", "Trigeminal neuralgia", "Uretritis", "Ulseratif kolitis"],
    ["Uveitis", "Urolitiasis", "Ulkus peptikum", "Urtikaria"],

    // Page 14 (N)
    ["Varises", "Vaginitis", "Vertigo", "Varikokel"],
    ["Vitiligo", "Vaskulitis", "Varicella", "Vena tersumbat"],
    ["Vulvitis", "Virus Zika", "Wabah pes", "Warna gigi abnormal"],
    ["Wolff-Parkinson-White", "Wasir", "Warna kulit tidak rata", "Wart"],

    // Page 15 (O)
    ["Xeroderma pigmentosum", "Xanthoma", "Xanthogranuloma", "Xerostomia"],
    ["Xerophthalmia", "X-linked agammaglobulinemia", "Xiphoidalgia", "Xerosis"],
    ["Xanthopsia", "Xanthelasma", "Zika", "Zollinger-Ellison syndrome"],
    ["Zoster", "Zygomycosis", "Zoster oticus", "Zat besi defisiensi"],

    // Page 16 (P)
    ["Psoriasis", "Penyakit jantung", "Penyakit hati", "Penyakit ginjal"],
    ["Penyakit autoimun", "Penyakit infeksi", "Penyakit metabolik", "Penyakit paru-paru"],
    ["Paralisis", "Penyakit menular", "Penyakit endokrin", "Penyakit vaskular"],
    ["Pankreatitis", "Peritonitis", "Penyakit tiroid", "Penyakit sistem saraf"],

    // Page 17 (Q)
    ["Quinsy", "Quiste sebaceous", "Queratitis", "Quiste ovarium"],
    ["Qualia", "Qualm", "Quadriplegia", "Quantitative Eosinophilia"],
    ["Quasihyperlipidemia", "Quercetin", "Quintuple negative", "Quinine"],
    ["Quickening", "Q fever", "QRS complex", "Quorum sensing"],

    // Page 18 (R)
    ["Rabies", "Radang paru-paru", "Retinitis", "Radikulopati"],
    ["Ruptur tendon", "Ruam", "Sakit kepala", "Sinusitis"],
    ["Skoliosis", "Stroke", "Sirosis", "Syok septik"],
    ["Rinitis alergi", "Rheumatoid arthritis", "Rubella", "Rhabdomyolysis"],

    // Page 19 (S)
    ["Sakit perut", "Sinusitis", "Skleroderma", "Spondilitis"],
    ["Sifilis", "Sakoma", "Sarkoidosis", "Skoliosis"],
    ["Sarkoma Kaposi", "Seborrheic dermatitis", "Syndrome", "Syaraf terjepit"],
    ["Sarcopenia", "Sindrom ovarium polikistik", "Sklerosis ganda", "Sistitis"],

    // Page 20 (T)
    ["TBC", "Tetanus", "Tiroiditis", "Tifoid"], 
    ["Trombositopenia", "Trombosis", "Tonsilitis", "Trikomoniasis"], 
    ["Tuberkulosis", "Trigeminal neuralgia", "Uretritis", "Ulseratif kolitis"], 
    ["Uveitis", "Urolitiasis", "Ulkus peptikum", "Urtikaria"],

        // Page 21 (U)
    ["Ultrasonografi", "Urethritis", "Uremia", "Urtikaria"],
    ["Uveitis", "Ulkus peptikum", "Uremic syndrome", "Urolithiasis"],
    ["Ulcerative colitis", "Uterine fibroids", "Urothelial carcinoma", "Urethral stricture"],
    ["Uterine prolapse", "Urinary incontinence", "Uveitis", "Urge incontinence"],

    // Page 22 (V)
    ["Virus hepatitis", "Vaskulitis", "Vena trombosis", "Vulvitis"],
    ["Viral meningitis", "Vaskular dementia", "Vertigo", "Vitiligo"],
    ["Varicella", "Vasculitis", "Veno-occlusive disease", "Vestibular neuritis"],
    ["Viral gastroenteritis", "Viral hepatitis", "Viral pneumonia", "Visceral leishmaniasis"],

    // Page 23 (W)
    ["Wabah pes", "Wasir", "Warna kulit tidak rata", "Wart"],
    ["Whipple's disease", "Wernicke's encephalopathy", "Wiskott-Aldrich syndrome", "Wilms' tumor"],
    ["Wilson's disease", "Wolff-Parkinson-White syndrome", "Wysong syndrome", "Waterhouse-Friderichsen syndrome"],
    ["Whiplash injury", "Wet macular degeneration", "Wernicke's aphasia", "Whipple's syndrome"],

    // Page 24 (X)
    ["Xeroderma pigmentosum", "Xanthoma", "Xanthogranuloma", "Xerostomia"],
    ["Xerophthalmia", "X-linked agammaglobulinemia", "Xiphoidalgia", "Xerosis"],
    ["Xanthopsia", "Xanthelasma", "X-linked ichthyosis", "X-linked hypertriglyceridemia"],
    ["X-linked hypogammaglobulinemia", "X-linked severe combined immunodeficiency", "X-linked recessive", "X-linked myopathy"],

    // Page 25 (Y)
    ["Yersiniosis", "Yellow fever", "Yolk sac tumor", "Yaws"],
    ["Yeti syndrome", "Yersinia pestis", "Yolk sac tumor", "Yucca poisoning"],
    ["Young's syndrome", "Yttrium-90", "Yersinia enterocolitica", "Yoke"],
    ["Ytterbium poisoning", "Yttrium toxicity", "Yaws disease", "Yeast infection"],

    // Page 26 (Z)
    ["Zika", "Zoster", "Zollinger-Ellison syndrome", "Zygomycosis"],
    ["Zenker's diverticulum", "Zinc deficiency", "Zollinger-Ellison syndrome", "Zygomycosis"],
    ["Zoonosis", "Zoonotic infections", "Zinc poisoning", "Zollinger-Ellison syndrome"],
    ["Zygomatic arch fracture", "Zygomatic bone fracture", "Zygomycosis", "Zigzag syndrome"],

];




let currentPage = 1;
const totalPages = allDiseases.length;

function displayDiseases(page) {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    const diseasesToShow = allDiseases.slice(startIndex, endIndex);

    let html = '';
    diseasesToShow.forEach(column => {
        html += '<div class="disease-column">';
        column.forEach(disease => {
            html += `<p>${disease}</p>`;
        });
        html += '</div>';
        html += '<div class="vertical-line"></div>';
    });

    $('#disease-list').html(html);
    updatePaginationButtons(); // Update pagination button states
}

function changePage(page) {
    currentPage = page;
    displayDiseases(currentPage);
}

function nextPage() {
    currentPage++;
    if (currentPage > totalPages) currentPage = totalPages; // Prevent going beyond last page
    displayDiseases(currentPage);
}

function prevPage() {
    currentPage--;
    if (currentPage < 1) currentPage = 1; // Prevent going before first page
    displayDiseases(currentPage);
}

function updatePaginationButtons() {
    $('.pagination button').each(function (index) {
        if (index === 0 && currentPage === 1) {
            $(this).prop('disabled', true); // Disable previous button if on first page
        } else if (index === 1 && currentPage === totalPages) {
            $(this).prop('disabled', true); // Disable next button if on last page
        } else {
            $(this).prop('disabled', false); // Enable all other buttons
        }
    });
}

function filterDiseases(letter) {
    $('#disease-list').html(''); // Clear previous disease list

    let filteredDiseases = [];
    allDiseases.forEach(page => {
        const matchingDiseases = page.filter(disease => disease.startsWith(letter));
        if (matchingDiseases.length > 0) {
            filteredDiseases.push(matchingDiseases);
        }
    });

    if (filteredDiseases.length > 0) {
        let html = '';
        filteredDiseases.forEach(column => {
            html += '<div class="disease-column">';
            column.forEach(disease => {
                html += `<p>${disease}</p>`;
            });
            html += '</div>';
            html += '<div class="vertical-line"></div>';
        });
        $('#disease-list').html(html);
    } else {
        $('#disease-list').html('<p>Tidak ada penyakit yang ditemukan.</p>');
    }
}

// Initialize the page by displaying diseases on the first page
displayDiseases(1);     
