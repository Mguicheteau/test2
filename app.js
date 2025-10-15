// Base de données intégrée des participants (anonymisée)
const participantsDatabase = {
  "8557E5C1": {
    "nom": "Participant 8557E5C1",
    "region": "Strasbourg",
    "evenements": []
  },
  "6A4338C9": {
    "nom": "Participant 6A4338C9",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "80783D05": {
    "nom": "Participant 80783D05",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "C6D5E73F": {
    "nom": "Participant C6D5E73F",
    "region": "ALGERIE",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "FC68AED2": {
    "nom": "Participant FC68AED2",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Visite Rade Enfant",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "47C3D4FB": {
    "nom": "Participant 47C3D4FB",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "3010B2E3": {
    "nom": "Participant 3010B2E3",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "38E9E022": {
    "nom": "Participant 38E9E022",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "C24EECDF": {
    "nom": "Participant C24EECDF",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "6C1CC106": {
    "nom": "Participant 6C1CC106",
    "region": "Inconnue",
    "evenements": []
  },
  "E5FCCEE5": {
    "nom": "Participant E5FCCEE5",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "D73ADE2A": {
    "nom": "Participant D73ADE2A",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "4027C6C7": {
    "nom": "Participant 4027C6C7",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "4BEC62CC": {
    "nom": "Participant 4BEC62CC",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "98B27F1A": {
    "nom": "Participant 98B27F1A",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "AD6E5B08": {
    "nom": "Participant AD6E5B08",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "9ABE7905": {
    "nom": "Participant 9ABE7905",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "19A267DA": {
    "nom": "Participant 19A267DA",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "F8067BC6": {
    "nom": "Participant F8067BC6",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "F4DEFBEF": {
    "nom": "Participant F4DEFBEF",
    "region": "Nice-Corse",
    "evenements": []
  },
  "F06D4197": {
    "nom": "Participant F06D4197",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "184312BB": {
    "nom": "Participant 184312BB",
    "region": "Bureau National",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "6D697AA5": {
    "nom": "Participant 6D697AA5",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "17D2C3E0": {
    "nom": "Participant 17D2C3E0",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "2D995985": {
    "nom": "Participant 2D995985",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "97A3FBFF": {
    "nom": "Participant 97A3FBFF",
    "region": "Bretagne",
    "evenements": []
  },
  "E10BAA82": {
    "nom": "Participant E10BAA82",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "D94CAA99": {
    "nom": "Participant D94CAA99",
    "region": "Basse-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "4BFE3FA6": {
    "nom": "Participant 4BFE3FA6",
    "region": "Nice-Corse",
    "evenements": []
  },
  "A94E2D3B": {
    "nom": "Participant A94E2D3B",
    "region": "Ile-de-France",
    "evenements": []
  },
  "D9D1D44E": {
    "nom": "Participant D9D1D44E",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "DBA186EC": {
    "nom": "Participant DBA186EC",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "D51226C9": {
    "nom": "Participant D51226C9",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "6E32EAFD": {
    "nom": "Participant 6E32EAFD",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "51056500": {
    "nom": "Participant 51056500",
    "region": "Inconnue",
    "evenements": []
  },
  "72F6C2BB": {
    "nom": "Participant 72F6C2BB",
    "region": "Inconnue",
    "evenements": []
  },
  "77AFF087": {
    "nom": "Participant 77AFF087",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "F3F7F4B1": {
    "nom": "Participant F3F7F4B1",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "6B15147B": {
    "nom": "Participant 6B15147B",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "B3910D52": {
    "nom": "Participant B3910D52",
    "region": "Inconnue",
    "evenements": []
  },
  "866DA5A2": {
    "nom": "Participant 866DA5A2",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "E70C4B78": {
    "nom": "Participant E70C4B78",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "2C772671": {
    "nom": "Participant 2C772671",
    "region": "Inconnue",
    "evenements": []
  },
  "74D98E6E": {
    "nom": "Participant 74D98E6E",
    "region": "Inconnue",
    "evenements": []
  },
  "F3051066": {
    "nom": "Participant F3051066",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "4B53E2DE": {
    "nom": "Participant 4B53E2DE",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "374A43D2": {
    "nom": "Participant 374A43D2",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "3816717A": {
    "nom": "Participant 3816717A",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "2DFDDA82": {
    "nom": "Participant 2DFDDA82",
    "region": "Inconnue",
    "evenements": []
  },
  "07E339F5": {
    "nom": "Participant 07E339F5",
    "region": "Inconnue",
    "evenements": []
  },
  "07410A7C": {
    "nom": "Participant 07410A7C",
    "region": "Inconnue",
    "evenements": []
  },
  "05DCA989": {
    "nom": "Participant 05DCA989",
    "region": "Inconnue",
    "evenements": []
  },
  "BD13D966": {
    "nom": "Participant BD13D966",
    "region": "Inconnue",
    "evenements": []
  },
  "8A6EFABA": {
    "nom": "Participant 8A6EFABA",
    "region": "Inconnue",
    "evenements": []
  },
  "8F9A1E3F": {
    "nom": "Participant 8F9A1E3F",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "682EC733": {
    "nom": "Participant 682EC733",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "CB00FEE5": {
    "nom": "Participant CB00FEE5",
    "region": "Inconnue",
    "evenements": []
  },
  "C28D5B54": {
    "nom": "Participant C28D5B54",
    "region": "Inconnue",
    "evenements": []
  },
  "77B93C5A": {
    "nom": "Participant 77B93C5A",
    "region": "Inconnue",
    "evenements": []
  },
  "E4449FB9": {
    "nom": "Participant E4449FB9",
    "region": "Inconnue",
    "evenements": []
  },
  "76F8174A": {
    "nom": "Participant 76F8174A",
    "region": "Inconnue",
    "evenements": []
  },
  "75A05098": {
    "nom": "Participant 75A05098",
    "region": "Inconnue",
    "evenements": []
  },
  "FAFE112D": {
    "nom": "Participant FAFE112D",
    "region": "Inconnue",
    "evenements": []
  },
  "B475EACC": {
    "nom": "Participant B475EACC",
    "region": "Inconnue",
    "evenements": []
  },
  "EB4FB965": {
    "nom": "Participant EB4FB965",
    "region": "Inconnue",
    "evenements": []
  },
  "A1DAEF36": {
    "nom": "Participant A1DAEF36",
    "region": "Inconnue",
    "evenements": []
  },
  "374ADAC7": {
    "nom": "Participant 374ADAC7",
    "region": "Inconnue",
    "evenements": []
  },
  "444484BE": {
    "nom": "Participant 444484BE",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "44D402A7": {
    "nom": "Participant 44D402A7",
    "region": "Inconnue",
    "evenements": []
  },
  "B3E864F6": {
    "nom": "Participant B3E864F6",
    "region": "Inconnue",
    "evenements": []
  },
  "C4A26C11": {
    "nom": "Participant C4A26C11",
    "region": "Inconnue",
    "evenements": []
  },
  "643EEA45": {
    "nom": "Participant 643EEA45",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "4407E5E3": {
    "nom": "Participant 4407E5E3",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "2C91A1E0": {
    "nom": "Participant 2C91A1E0",
    "region": "FRANCE",
    "evenements": []
  },
  "9BB38FB1": {
    "nom": "Participant 9BB38FB1",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "A91180E3": {
    "nom": "Participant A91180E3",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "5911A39E": {
    "nom": "Participant 5911A39E",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "A69F187F": {
    "nom": "Participant A69F187F",
    "region": "FRANCE",
    "evenements": []
  },
  "85C96523": {
    "nom": "Participant 85C96523",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "3DFD9DD4": {
    "nom": "Participant 3DFD9DD4",
    "region": "FRANCE",
    "evenements": []
  },
  "EC075679": {
    "nom": "Participant EC075679",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "0AF605F0": {
    "nom": "Participant 0AF605F0",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "CC898EBB": {
    "nom": "Participant CC898EBB",
    "region": "FRANCE",
    "evenements": []
  },
  "A7434423": {
    "nom": "Participant A7434423",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "3290B3A2": {
    "nom": "Participant 3290B3A2",
    "region": "FRANCE",
    "evenements": []
  },
  "0EF20CE7": {
    "nom": "Participant 0EF20CE7",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "2045FD5D": {
    "nom": "Participant 2045FD5D",
    "region": "ALGÉRIE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "6EF3D817": {
    "nom": "Participant 6EF3D817",
    "region": "ALGÉRIE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "AB330A82": {
    "nom": "Participant AB330A82",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "8A7942B8": {
    "nom": "Participant 8A7942B8",
    "region": "FRANCE",
    "evenements": []
  },
  "DD15071F": {
    "nom": "Participant DD15071F",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "9AAF677A": {
    "nom": "Participant 9AAF677A",
    "region": "FRANCE",
    "evenements": []
  },
  "A9F00075": {
    "nom": "Participant A9F00075",
    "region": "FRANCE",
    "evenements": []
  },
  "38AA6DB5": {
    "nom": "Participant 38AA6DB5",
    "region": "FRANCE",
    "evenements": []
  },
  "17642C23": {
    "nom": "Participant 17642C23",
    "region": "FRANCE",
    "evenements": []
  },
  "32E6324B": {
    "nom": "Participant 32E6324B",
    "region": "FRANCE",
    "evenements": []
  },
  "C6939350": {
    "nom": "Participant C6939350",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "FC8F4A96": {
    "nom": "Participant FC8F4A96",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "B0A4B8E3": {
    "nom": "Participant B0A4B8E3",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "7FD34AC9": {
    "nom": "Participant 7FD34AC9",
    "region": "FRANCE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "4C513D42": {
    "nom": "Participant 4C513D42",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "0D082DD8": {
    "nom": "Participant 0D082DD8",
    "region": "Strasbourg",
    "evenements": []
  },
  "A50D6048": {
    "nom": "Participant A50D6048",
    "region": "Strasbourg",
    "evenements": []
  },
  "9F1EE7FD": {
    "nom": "Participant 9F1EE7FD",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "C4E54827": {
    "nom": "Participant C4E54827",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "69F6F1A6": {
    "nom": "Participant 69F6F1A6",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "F33369FF": {
    "nom": "Participant F33369FF",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "A4BC157D": {
    "nom": "Participant A4BC157D",
    "region": "Limoges",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "9CEE997A": {
    "nom": "Participant 9CEE997A",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "8CEC9A1D": {
    "nom": "Participant 8CEC9A1D",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "807C4B42": {
    "nom": "Participant 807C4B42",
    "region": "Ile-de-France",
    "evenements": []
  },
  "5E0E0C3D": {
    "nom": "Participant 5E0E0C3D",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "9A2E585F": {
    "nom": "Participant 9A2E585F",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "FCC8F114": {
    "nom": "Participant FCC8F114",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "04DDDE57": {
    "nom": "Participant 04DDDE57",
    "region": "Ile-de-France",
    "evenements": []
  },
  "275138CC": {
    "nom": "Participant 275138CC",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "44623F6B": {
    "nom": "Participant 44623F6B",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "172C1233": {
    "nom": "Participant 172C1233",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "BD6122AC": {
    "nom": "Participant BD6122AC",
    "region": "Ile-de-France",
    "evenements": []
  },
  "19708224": {
    "nom": "Participant 19708224",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "DBA020BA": {
    "nom": "Participant DBA020BA",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "D4D0C58E": {
    "nom": "Participant D4D0C58E",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E965CEFA": {
    "nom": "Participant E965CEFA",
    "region": "Poitou-Charentes",
    "evenements": []
  },
  "1B38F994": {
    "nom": "Participant 1B38F994",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "BEA44FD0": {
    "nom": "Participant BEA44FD0",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "B97D0B38": {
    "nom": "Participant B97D0B38",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "8F1A6D71": {
    "nom": "Participant 8F1A6D71",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "293DF7E8": {
    "nom": "Participant 293DF7E8",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "9E7AEEBA": {
    "nom": "Participant 9E7AEEBA",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "C8A880C4": {
    "nom": "Participant C8A880C4",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "7D5FCCC3": {
    "nom": "Participant 7D5FCCC3",
    "region": "Ile-de-France",
    "evenements": []
  },
  "978F432A": {
    "nom": "Participant 978F432A",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "6C3599FE": {
    "nom": "Participant 6C3599FE",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "D1C73274": {
    "nom": "Participant D1C73274",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "97C13ABE": {
    "nom": "Participant 97C13ABE",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "28E10008": {
    "nom": "Participant 28E10008",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "56EF535E": {
    "nom": "Participant 56EF535E",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "D04FF2DA": {
    "nom": "Participant D04FF2DA",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Enfant",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "C4F142DC": {
    "nom": "Participant C4F142DC",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "140A5A0B": {
    "nom": "Participant 140A5A0B",
    "region": "Picardie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E55AFBB7": {
    "nom": "Participant E55AFBB7",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "BA85B2F7": {
    "nom": "Participant BA85B2F7",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "998B3E9E": {
    "nom": "Participant 998B3E9E",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "8ED2895C": {
    "nom": "Participant 8ED2895C",
    "region": "Inconnue",
    "evenements": []
  },
  "60262870": {
    "nom": "Participant 60262870",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "2860519C": {
    "nom": "Participant 2860519C",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "B438B1FC": {
    "nom": "Participant B438B1FC",
    "region": "Ile-de-France",
    "evenements": []
  },
  "7F8CAB92": {
    "nom": "Participant 7F8CAB92",
    "region": "Nice-Corse",
    "evenements": []
  },
  "EC1A342A": {
    "nom": "Participant EC1A342A",
    "region": "Nice-Corse",
    "evenements": []
  },
  "7184A326": {
    "nom": "Participant 7184A326",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "B64F54A3": {
    "nom": "Participant B64F54A3",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      }
    ]
  },
  "05309F44": {
    "nom": "Participant 05309F44",
    "region": "BELGIQUE",
    "evenements": []
  },
  "4025AE05": {
    "nom": "Participant 4025AE05",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "5FA78637": {
    "nom": "Participant 5FA78637",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "4B942B07": {
    "nom": "Participant 4B942B07",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "93B33799": {
    "nom": "Participant 93B33799",
    "region": "Ile-de-France",
    "evenements": []
  },
  "911DD4EA": {
    "nom": "Participant 911DD4EA",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "3BE2C592": {
    "nom": "Participant 3BE2C592",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "F1D2BE79": {
    "nom": "Participant F1D2BE79",
    "region": "Nice-Corse",
    "evenements": []
  },
  "0D8E235B": {
    "nom": "Participant 0D8E235B",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "84CC43B9": {
    "nom": "Participant 84CC43B9",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "D5923913": {
    "nom": "Participant D5923913",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "DC41146F": {
    "nom": "Participant DC41146F",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "4E5D7EAE": {
    "nom": "Participant 4E5D7EAE",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "BC29ECAF": {
    "nom": "Participant BC29ECAF",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "C08E5BC5": {
    "nom": "Participant C08E5BC5",
    "region": "Ile-de-France",
    "evenements": []
  },
  "D03233C8": {
    "nom": "Participant D03233C8",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "CB6DD420": {
    "nom": "Participant CB6DD420",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "ED134260": {
    "nom": "Participant ED134260",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "BDC25A19": {
    "nom": "Participant BDC25A19",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "79CB7B03": {
    "nom": "Participant 79CB7B03",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "C72E753C": {
    "nom": "Participant C72E753C",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "33A1545F": {
    "nom": "Participant 33A1545F",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "9813AC07": {
    "nom": "Participant 9813AC07",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "BCAFC2AA": {
    "nom": "Participant BCAFC2AA",
    "region": "Aquitaine",
    "evenements": []
  },
  "1BC4EB05": {
    "nom": "Participant 1BC4EB05",
    "region": "Lille",
    "evenements": []
  },
  "C2AF630E": {
    "nom": "Participant C2AF630E",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "FD2825BD": {
    "nom": "Participant FD2825BD",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "C25CFB3F": {
    "nom": "Participant C25CFB3F",
    "region": "Aix-Marseille",
    "evenements": []
  },
  "45522949": {
    "nom": "Participant 45522949",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "AE4B3DA6": {
    "nom": "Participant AE4B3DA6",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "83BF427E": {
    "nom": "Participant 83BF427E",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "558D3E86": {
    "nom": "Participant 558D3E86",
    "region": "Ile-de-France",
    "evenements": []
  },
  "563B01B6": {
    "nom": "Participant 563B01B6",
    "region": "Nice-Corse",
    "evenements": []
  },
  "E27CF3E0": {
    "nom": "Participant E27CF3E0",
    "region": "Vice-Présidente",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "5DC0BC69": {
    "nom": "Participant 5DC0BC69",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "659F87B5": {
    "nom": "Participant 659F87B5",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "097EAD4F": {
    "nom": "Participant 097EAD4F",
    "region": "Toulouse",
    "evenements": []
  },
  "3DEFD357": {
    "nom": "Participant 3DEFD357",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "DFF53324": {
    "nom": "Participant DFF53324",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "6F512DE6": {
    "nom": "Participant 6F512DE6",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "76A4D7CB": {
    "nom": "Participant 76A4D7CB",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E73B56CB": {
    "nom": "Participant E73B56CB",
    "region": "Lorraine",
    "evenements": []
  },
  "23D59C2D": {
    "nom": "Participant 23D59C2D",
    "region": "Nice-Corse",
    "evenements": []
  },
  "DD236F3A": {
    "nom": "Participant DD236F3A",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "28D8BB05": {
    "nom": "Participant 28D8BB05",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "DE0C8133": {
    "nom": "Participant DE0C8133",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "8A186651": {
    "nom": "Participant 8A186651",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "D298E4C5": {
    "nom": "Participant D298E4C5",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "D46A95B0": {
    "nom": "Participant D46A95B0",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "5476FB42": {
    "nom": "Participant 5476FB42",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "241C1FD9": {
    "nom": "Participant 241C1FD9",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "EA367784": {
    "nom": "Participant EA367784",
    "region": "Nice-Corse",
    "evenements": []
  },
  "1BDD1A54": {
    "nom": "Participant 1BDD1A54",
    "region": "Inconnue",
    "evenements": []
  },
  "D22635C4": {
    "nom": "Participant D22635C4",
    "region": "Nice-Corse",
    "evenements": []
  },
  "B360F8AD": {
    "nom": "Participant B360F8AD",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "7D61BD94": {
    "nom": "Participant 7D61BD94",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "504B5A60": {
    "nom": "Participant 504B5A60",
    "region": "Nice-Corse",
    "evenements": []
  },
  "3CF0489C": {
    "nom": "Participant 3CF0489C",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "9C16381A": {
    "nom": "Participant 9C16381A",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "179A8CFC": {
    "nom": "Participant 179A8CFC",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E3326579": {
    "nom": "Participant E3326579",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "A460A6EB": {
    "nom": "Participant A460A6EB",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "B54E8422": {
    "nom": "Participant B54E8422",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "FF69E3B5": {
    "nom": "Participant FF69E3B5",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "CA13A431": {
    "nom": "Participant CA13A431",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "326AB86A": {
    "nom": "Participant 326AB86A",
    "region": "Inconnue",
    "evenements": []
  },
  "1E57C3EF": {
    "nom": "Participant 1E57C3EF",
    "region": "Basse-Normandie",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "1ACFAAD6": {
    "nom": "Participant 1ACFAAD6",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "15102FC1": {
    "nom": "Participant 15102FC1",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "8AC3AC14": {
    "nom": "Participant 8AC3AC14",
    "region": "Poitou-Charentes",
    "evenements": []
  },
  "1EFEC3DF": {
    "nom": "Participant 1EFEC3DF",
    "region": "Nice-Corse",
    "evenements": []
  },
  "0EBEADC0": {
    "nom": "Participant 0EBEADC0",
    "region": "Nice-Corse",
    "evenements": []
  },
  "14D3AB44": {
    "nom": "Participant 14D3AB44",
    "region": "Inconnue",
    "evenements": []
  },
  "A7A426C4": {
    "nom": "Participant A7A426C4",
    "region": "Nice-Corse",
    "evenements": []
  },
  "7150935F": {
    "nom": "Participant 7150935F",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "08B72C55": {
    "nom": "Participant 08B72C55",
    "region": "Poitou-Charentes",
    "evenements": []
  },
  "50567E20": {
    "nom": "Participant 50567E20",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "CE391CCC": {
    "nom": "Participant CE391CCC",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "16FA1CF7": {
    "nom": "Participant 16FA1CF7",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "7FAAACA5": {
    "nom": "Participant 7FAAACA5",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "39A34BC9": {
    "nom": "Participant 39A34BC9",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "E6E05FFC": {
    "nom": "Participant E6E05FFC",
    "region": "Trésorier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "0D12C12F": {
    "nom": "Participant 0D12C12F",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "B18670ED": {
    "nom": "Participant B18670ED",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "D3C76602": {
    "nom": "Participant D3C76602",
    "region": "Lyon",
    "evenements": []
  },
  "549DADBD": {
    "nom": "Participant 549DADBD",
    "region": "Champagne-Ardenne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "3C916C83": {
    "nom": "Participant 3C916C83",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "107F57A2": {
    "nom": "Participant 107F57A2",
    "region": "Champagne-Ardenne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "1270EE39": {
    "nom": "Participant 1270EE39",
    "region": "Clermont-Ferrand",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "090D88B6": {
    "nom": "Participant 090D88B6",
    "region": "Montpellier",
    "evenements": []
  },
  "78FCD2E0": {
    "nom": "Participant 78FCD2E0",
    "region": "Franche-Comté",
    "evenements": []
  },
  "62067242": {
    "nom": "Participant 62067242",
    "region": "Nantes",
    "evenements": []
  },
  "6A4F64F7": {
    "nom": "Participant 6A4F64F7",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "66927C40": {
    "nom": "Participant 66927C40",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "9E3BFD56": {
    "nom": "Participant 9E3BFD56",
    "region": "Ile-de-France",
    "evenements": []
  },
  "A4438D23": {
    "nom": "Participant A4438D23",
    "region": "Bourgogne",
    "evenements": []
  },
  "80E175DB": {
    "nom": "Participant 80E175DB",
    "region": "Lyon",
    "evenements": []
  },
  "CBE3A566": {
    "nom": "Participant CBE3A566",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "8081A05F": {
    "nom": "Participant 8081A05F",
    "region": "Clermont-Ferrand",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "F2DAA3A6": {
    "nom": "Participant F2DAA3A6",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "A755A734": {
    "nom": "Participant A755A734",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "2EEAAE87": {
    "nom": "Participant 2EEAAE87",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "D63B828B": {
    "nom": "Participant D63B828B",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E1530531": {
    "nom": "Participant E1530531",
    "region": "Ile-de-France",
    "evenements": []
  },
  "391C2B88": {
    "nom": "Participant 391C2B88",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "85AE2CA6": {
    "nom": "Participant 85AE2CA6",
    "region": "Ile-de-France",
    "evenements": []
  },
  "F4500036": {
    "nom": "Participant F4500036",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "88B360C9": {
    "nom": "Participant 88B360C9",
    "region": "Lille",
    "evenements": []
  },
  "ACA1B60A": {
    "nom": "Participant ACA1B60A",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "ADD7C110": {
    "nom": "Participant ADD7C110",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "35C4666D": {
    "nom": "Participant 35C4666D",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "B3EDA5B3": {
    "nom": "Participant B3EDA5B3",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "C02B1B2F": {
    "nom": "Participant C02B1B2F",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "C978B8D5": {
    "nom": "Participant C978B8D5",
    "region": "Inconnue",
    "evenements": []
  },
  "D9F5CE85": {
    "nom": "Participant D9F5CE85",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "FC585A85": {
    "nom": "Participant FC585A85",
    "region": "Lille",
    "evenements": [
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "2334E063": {
    "nom": "Participant 2334E063",
    "region": "Picardie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "3108DBEB": {
    "nom": "Participant 3108DBEB",
    "region": "Lille",
    "evenements": []
  },
  "2DE6FEA8": {
    "nom": "Participant 2DE6FEA8",
    "region": "Ile-de-France",
    "evenements": []
  },
  "1FB729EA": {
    "nom": "Participant 1FB729EA",
    "region": "La Réunion",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "C6C12527": {
    "nom": "Participant C6C12527",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "D379FC65": {
    "nom": "Participant D379FC65",
    "region": "Nice-Corse",
    "evenements": []
  },
  "C59DB9D5": {
    "nom": "Participant C59DB9D5",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "A8CE8A5E": {
    "nom": "Participant A8CE8A5E",
    "region": "Strasbourg",
    "evenements": []
  },
  "C3E97BC0": {
    "nom": "Participant C3E97BC0",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "FEADA00F": {
    "nom": "Participant FEADA00F",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "150B4FD7": {
    "nom": "Participant 150B4FD7",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "C70B0282": {
    "nom": "Participant C70B0282",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "ED841ABA": {
    "nom": "Participant ED841ABA",
    "region": "Nice-Corse",
    "evenements": []
  },
  "7D0499E7": {
    "nom": "Participant 7D0499E7",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "BD70415A": {
    "nom": "Participant BD70415A",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "F81E61E5": {
    "nom": "Participant F81E61E5",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "60BC6B4E": {
    "nom": "Participant 60BC6B4E",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "A0683D0B": {
    "nom": "Participant A0683D0B",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "FE3D6A28": {
    "nom": "Participant FE3D6A28",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "C6233C3E": {
    "nom": "Participant C6233C3E",
    "region": "Secrétaire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "9209A93A": {
    "nom": "Participant 9209A93A",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "EA40E586": {
    "nom": "Participant EA40E586",
    "region": "Franche-Comté",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "42889FCA": {
    "nom": "Participant 42889FCA",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "CC59D958": {
    "nom": "Participant CC59D958",
    "region": "Nice-Corse",
    "evenements": []
  },
  "DC4A2481": {
    "nom": "Participant DC4A2481",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "AE75C633": {
    "nom": "Participant AE75C633",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "3D71320A": {
    "nom": "Participant 3D71320A",
    "region": "Montpellier",
    "evenements": []
  },
  "7C74F612": {
    "nom": "Participant 7C74F612",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "27921C4C": {
    "nom": "Participant 27921C4C",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "5B0A9675": {
    "nom": "Participant 5B0A9675",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "09D05648": {
    "nom": "Participant 09D05648",
    "region": "Ile-de-France",
    "evenements": []
  },
  "AF347A39": {
    "nom": "Participant AF347A39",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "91D2CC82": {
    "nom": "Participant 91D2CC82",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "C687E2BF": {
    "nom": "Participant C687E2BF",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "BF25B789": {
    "nom": "Participant BF25B789",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "294C5515": {
    "nom": "Participant 294C5515",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "4754382E": {
    "nom": "Participant 4754382E",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "1025429A": {
    "nom": "Participant 1025429A",
    "region": "Nice-Corse",
    "evenements": []
  },
  "44EEF63E": {
    "nom": "Participant 44EEF63E",
    "region": "Nice-Corse",
    "evenements": []
  },
  "F138395E": {
    "nom": "Participant F138395E",
    "region": "Franche-Comté",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "E6565A3C": {
    "nom": "Participant E6565A3C",
    "region": "Ile-de-France",
    "evenements": []
  },
  "6A2E7C38": {
    "nom": "Participant 6A2E7C38",
    "region": "Nice-Corse",
    "evenements": []
  },
  "977BE4BD": {
    "nom": "Participant 977BE4BD",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "78BEFA87": {
    "nom": "Participant 78BEFA87",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "438D5813": {
    "nom": "Participant 438D5813",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "518E75A2": {
    "nom": "Participant 518E75A2",
    "region": "Champagne-Ardenne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "07448BE2": {
    "nom": "Participant 07448BE2",
    "region": "Nantes",
    "evenements": []
  },
  "BEED2E44": {
    "nom": "Participant BEED2E44",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "2D998628": {
    "nom": "Participant 2D998628",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "1C371554": {
    "nom": "Participant 1C371554",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "D6CDCAF0": {
    "nom": "Participant D6CDCAF0",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "06ED30A7": {
    "nom": "Participant 06ED30A7",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "711E0D68": {
    "nom": "Participant 711E0D68",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "33BABDAD": {
    "nom": "Participant 33BABDAD",
    "region": "Inconnue",
    "evenements": []
  },
  "6DE13689": {
    "nom": "Participant 6DE13689",
    "region": "Ile-de-France",
    "evenements": []
  },
  "2CF16EEE": {
    "nom": "Participant 2CF16EEE",
    "region": "Nice-Corse",
    "evenements": []
  },
  "F250F588": {
    "nom": "Participant F250F588",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "801B4A75": {
    "nom": "Participant 801B4A75",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "03CD93FE": {
    "nom": "Participant 03CD93FE",
    "region": "Nice-Corse",
    "evenements": []
  },
  "1AEA6633": {
    "nom": "Participant 1AEA6633",
    "region": "Nice-Corse",
    "evenements": []
  },
  "AD6106FF": {
    "nom": "Participant AD6106FF",
    "region": "Lille",
    "evenements": []
  },
  "A1D884AC": {
    "nom": "Participant A1D884AC",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "B668FFED": {
    "nom": "Participant B668FFED",
    "region": "Grenoble",
    "evenements": []
  },
  "532F14CC": {
    "nom": "Participant 532F14CC",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "623A1791": {
    "nom": "Participant 623A1791",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "33C06B08": {
    "nom": "Participant 33C06B08",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "D25DA001": {
    "nom": "Participant D25DA001",
    "region": "Aix-Marseille",
    "evenements": []
  },
  "6F08AF10": {
    "nom": "Participant 6F08AF10",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "8A82B737": {
    "nom": "Participant 8A82B737",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "70AC173F": {
    "nom": "Participant 70AC173F",
    "region": "Lille",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "32BA591F": {
    "nom": "Participant 32BA591F",
    "region": "Nice-Corse",
    "evenements": []
  },
  "AA4D9782": {
    "nom": "Participant AA4D9782",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "6A08246A": {
    "nom": "Participant 6A08246A",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "A2396CDC": {
    "nom": "Participant A2396CDC",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "AE5BEB25": {
    "nom": "Participant AE5BEB25",
    "region": "Picardie",
    "evenements": [
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "F2CCCABD": {
    "nom": "Participant F2CCCABD",
    "region": "Poitou-Charentes",
    "evenements": []
  },
  "E76C7EBD": {
    "nom": "Participant E76C7EBD",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "73012F20": {
    "nom": "Participant 73012F20",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "4589C346": {
    "nom": "Participant 4589C346",
    "region": "Ile-de-France",
    "evenements": []
  },
  "AC1F1C76": {
    "nom": "Participant AC1F1C76",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "F16531D2": {
    "nom": "Participant F16531D2",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "2A961650": {
    "nom": "Participant 2A961650",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "BBFCE35E": {
    "nom": "Participant BBFCE35E",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "8B8A10C7": {
    "nom": "Participant 8B8A10C7",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "77D3A907": {
    "nom": "Participant 77D3A907",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "26DB144B": {
    "nom": "Participant 26DB144B",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "2AEECCFD": {
    "nom": "Participant 2AEECCFD",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "0C71C1B6": {
    "nom": "Participant 0C71C1B6",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "E28E2FF5": {
    "nom": "Participant E28E2FF5",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "267C41BA": {
    "nom": "Participant 267C41BA",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "6F83C63D": {
    "nom": "Participant 6F83C63D",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "05ACDE1C": {
    "nom": "Participant 05ACDE1C",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "D763914E": {
    "nom": "Participant D763914E",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "E72C4CC0": {
    "nom": "Participant E72C4CC0",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "352CEA10": {
    "nom": "Participant 352CEA10",
    "region": "Champagne-Ardenne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "ABF4FA1D": {
    "nom": "Participant ABF4FA1D",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "6106BA2E": {
    "nom": "Participant 6106BA2E",
    "region": "Nice-Corse",
    "evenements": []
  },
  "6190C7DB": {
    "nom": "Participant 6190C7DB",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "DB7F56F8": {
    "nom": "Participant DB7F56F8",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "494D8B18": {
    "nom": "Participant 494D8B18",
    "region": "Montpellier",
    "evenements": []
  },
  "F8A9730B": {
    "nom": "Participant F8A9730B",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "3E03FD5E": {
    "nom": "Participant 3E03FD5E",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "EA34B669": {
    "nom": "Participant EA34B669",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "BAC4EF02": {
    "nom": "Participant BAC4EF02",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "1B5EB9DA": {
    "nom": "Participant 1B5EB9DA",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "BDABCA0F": {
    "nom": "Participant BDABCA0F",
    "region": "Nice-Corse",
    "evenements": []
  },
  "E2159371": {
    "nom": "Participant E2159371",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "EF76A0CB": {
    "nom": "Participant EF76A0CB",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "90C71A46": {
    "nom": "Participant 90C71A46",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "1E148C0C": {
    "nom": "Participant 1E148C0C",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "F894F033": {
    "nom": "Participant F894F033",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "70607205": {
    "nom": "Participant 70607205",
    "region": "Toulouse",
    "evenements": []
  },
  "A2000814": {
    "nom": "Participant A2000814",
    "region": "Toulouse",
    "evenements": []
  },
  "A2A9FBED": {
    "nom": "Participant A2A9FBED",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "91C7504E": {
    "nom": "Participant 91C7504E",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "A4E35A50": {
    "nom": "Participant A4E35A50",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "DA65A88F": {
    "nom": "Participant DA65A88F",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "C536C8AC": {
    "nom": "Participant C536C8AC",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "AF153A19": {
    "nom": "Participant AF153A19",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "2A608F02": {
    "nom": "Participant 2A608F02",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "4D72763F": {
    "nom": "Participant 4D72763F",
    "region": "Nice-Corse",
    "evenements": []
  },
  "229AB3E3": {
    "nom": "Participant 229AB3E3",
    "region": "Ile-de-France",
    "evenements": []
  },
  "56D303C7": {
    "nom": "Participant 56D303C7",
    "region": "Ile-de-France",
    "evenements": []
  },
  "701D79F0": {
    "nom": "Participant 701D79F0",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "DD162FB2": {
    "nom": "Participant DD162FB2",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "7BDD9FD5": {
    "nom": "Participant 7BDD9FD5",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "B614FA32": {
    "nom": "Participant B614FA32",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "75804E55": {
    "nom": "Participant 75804E55",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "F6DA919E": {
    "nom": "Participant F6DA919E",
    "region": "Nice-Corse",
    "evenements": []
  },
  "A6684550": {
    "nom": "Participant A6684550",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E5790DA5": {
    "nom": "Participant E5790DA5",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "2B445B49": {
    "nom": "Participant 2B445B49",
    "region": "Nice-Corse",
    "evenements": []
  },
  "F3DBDA93": {
    "nom": "Participant F3DBDA93",
    "region": "Nice-Corse",
    "evenements": []
  },
  "BF4FC9BA": {
    "nom": "Participant BF4FC9BA",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "E88FBCA5": {
    "nom": "Participant E88FBCA5",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "781819A8": {
    "nom": "Participant 781819A8",
    "region": "Inconnue",
    "evenements": []
  },
  "E9D53FF2": {
    "nom": "Participant E9D53FF2",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "F678FC53": {
    "nom": "Participant F678FC53",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "73154EC1": {
    "nom": "Participant 73154EC1",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "256C6AE5": {
    "nom": "Participant 256C6AE5",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "E04FA4B0": {
    "nom": "Participant E04FA4B0",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "92A1C14D": {
    "nom": "Participant 92A1C14D",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "67F14EF8": {
    "nom": "Participant 67F14EF8",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "E437B4C4": {
    "nom": "Participant E437B4C4",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "F6322E22": {
    "nom": "Participant F6322E22",
    "region": "Centre-Val de Loire",
    "evenements": []
  },
  "944C41A9": {
    "nom": "Participant 944C41A9",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "6FDD7BD9": {
    "nom": "Participant 6FDD7BD9",
    "region": "Champagne-Ardenne",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "ABADAF9C": {
    "nom": "Participant ABADAF9C",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "E51B3783": {
    "nom": "Participant E51B3783",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "B693D53E": {
    "nom": "Participant B693D53E",
    "region": "Nice-Corse",
    "evenements": []
  },
  "091AD7D7": {
    "nom": "Participant 091AD7D7",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "AE1DC229": {
    "nom": "Participant AE1DC229",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Enfant",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "7084E4E4": {
    "nom": "Participant 7084E4E4",
    "region": "Poitou-Charentes",
    "evenements": []
  },
  "694CDFE6": {
    "nom": "Participant 694CDFE6",
    "region": "Ile-de-France",
    "evenements": []
  },
  "72A4BF0D": {
    "nom": "Participant 72A4BF0D",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E44AADB5": {
    "nom": "Participant E44AADB5",
    "region": "Grenoble",
    "evenements": []
  },
  "81FF2B8C": {
    "nom": "Participant 81FF2B8C",
    "region": "Ile-de-France",
    "evenements": []
  },
  "C5459200": {
    "nom": "Participant C5459200",
    "region": "Nantes",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "BB185D3F": {
    "nom": "Participant BB185D3F",
    "region": "Aquitaine",
    "evenements": []
  },
  "047A6E71": {
    "nom": "Participant 047A6E71",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "47C54475": {
    "nom": "Participant 47C54475",
    "region": "Inconnue",
    "evenements": []
  },
  "67404ECA": {
    "nom": "Participant 67404ECA",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "7F8AF0E5": {
    "nom": "Participant 7F8AF0E5",
    "region": "Inconnue",
    "evenements": []
  },
  "4D6F2D8A": {
    "nom": "Participant 4D6F2D8A",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E01F8D61": {
    "nom": "Participant E01F8D61",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "9AB95612": {
    "nom": "Participant 9AB95612",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "A11377F2": {
    "nom": "Participant A11377F2",
    "region": "Inconnue",
    "evenements": []
  },
  "B4F41A9E": {
    "nom": "Participant B4F41A9E",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "9B0FCCFD": {
    "nom": "Participant 9B0FCCFD",
    "region": "Grenoble",
    "evenements": []
  },
  "126B7320": {
    "nom": "Participant 126B7320",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "A935DA27": {
    "nom": "Participant A935DA27",
    "region": "Grenoble",
    "evenements": []
  },
  "F7B330A8": {
    "nom": "Participant F7B330A8",
    "region": "Clermont-Ferrand",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "440B316C": {
    "nom": "Participant 440B316C",
    "region": "Nice-Corse",
    "evenements": []
  },
  "73D5097A": {
    "nom": "Participant 73D5097A",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "03B4992C": {
    "nom": "Participant 03B4992C",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "75C03C1C": {
    "nom": "Participant 75C03C1C",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "B0FBF7E1": {
    "nom": "Participant B0FBF7E1",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "6E57A4EC": {
    "nom": "Participant 6E57A4EC",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "EC673B84": {
    "nom": "Participant EC673B84",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "EB04FF8F": {
    "nom": "Participant EB04FF8F",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "835F1AD7": {
    "nom": "Participant 835F1AD7",
    "region": "Nice-Corse",
    "evenements": []
  },
  "9B42F7A6": {
    "nom": "Participant 9B42F7A6",
    "region": "Lille",
    "evenements": []
  },
  "8F57D787": {
    "nom": "Participant 8F57D787",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "5F7AC101": {
    "nom": "Participant 5F7AC101",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "90A90BE4": {
    "nom": "Participant 90A90BE4",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "201B6F15": {
    "nom": "Participant 201B6F15",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "272FEFD7": {
    "nom": "Participant 272FEFD7",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "430AE6FE": {
    "nom": "Participant 430AE6FE",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "8E0D2A39": {
    "nom": "Participant 8E0D2A39",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "35E0C6B3": {
    "nom": "Participant 35E0C6B3",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "1F95295B": {
    "nom": "Participant 1F95295B",
    "region": "Nice-Corse",
    "evenements": []
  },
  "8B21287A": {
    "nom": "Participant 8B21287A",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "ED709D9E": {
    "nom": "Participant ED709D9E",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "987134FD": {
    "nom": "Participant 987134FD",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "FD3F7C30": {
    "nom": "Participant FD3F7C30",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "1A685CD4": {
    "nom": "Participant 1A685CD4",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "665A388D": {
    "nom": "Participant 665A388D",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "39E82FC0": {
    "nom": "Participant 39E82FC0",
    "region": "Nice-Corse",
    "evenements": []
  },
  "48A7906A": {
    "nom": "Participant 48A7906A",
    "region": "Nice-Corse",
    "evenements": []
  },
  "3DE7EAD2": {
    "nom": "Participant 3DE7EAD2",
    "region": "Lyon",
    "evenements": []
  },
  "F96B182B": {
    "nom": "Participant F96B182B",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "3C74C33B": {
    "nom": "Participant 3C74C33B",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "EBF036C6": {
    "nom": "Participant EBF036C6",
    "region": "Nantes",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "09B737F2": {
    "nom": "Participant 09B737F2",
    "region": "Nice-Corse",
    "evenements": []
  },
  "01198D63": {
    "nom": "Participant 01198D63",
    "region": "Centre-Val de Loire",
    "evenements": []
  },
  "B8C8DF67": {
    "nom": "Participant B8C8DF67",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "46EE67BA": {
    "nom": "Participant 46EE67BA",
    "region": "Aix-Marseille",
    "evenements": []
  },
  "8AEA6B53": {
    "nom": "Participant 8AEA6B53",
    "region": "Nice-Corse",
    "evenements": []
  },
  "6A93777C": {
    "nom": "Participant 6A93777C",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "DD2B01B5": {
    "nom": "Participant DD2B01B5",
    "region": "Nice-Corse",
    "evenements": []
  },
  "D48F24E3": {
    "nom": "Participant D48F24E3",
    "region": "Nice-Corse",
    "evenements": []
  },
  "01186FFA": {
    "nom": "Participant 01186FFA",
    "region": "Lorraine",
    "evenements": []
  },
  "D0663535": {
    "nom": "Participant D0663535",
    "region": "Ile-de-France",
    "evenements": []
  },
  "555D4BAA": {
    "nom": "Participant 555D4BAA",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "7BBD1E3C": {
    "nom": "Participant 7BBD1E3C",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "68F9179B": {
    "nom": "Participant 68F9179B",
    "region": "Basse-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "89815B35": {
    "nom": "Participant 89815B35",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "CD735FBB": {
    "nom": "Participant CD735FBB",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "176D8278": {
    "nom": "Participant 176D8278",
    "region": "Ile-de-France",
    "evenements": []
  },
  "E815270A": {
    "nom": "Participant E815270A",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "D3459380": {
    "nom": "Participant D3459380",
    "region": "NORVÈGE",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "51C09DAB": {
    "nom": "Participant 51C09DAB",
    "region": "Lille",
    "evenements": []
  },
  "8BFDE7A3": {
    "nom": "Participant 8BFDE7A3",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "BE480175": {
    "nom": "Participant BE480175",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "5791C741": {
    "nom": "Participant 5791C741",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "863B33EB": {
    "nom": "Participant 863B33EB",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "FA9EE4C4": {
    "nom": "Participant FA9EE4C4",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "BC75B194": {
    "nom": "Participant BC75B194",
    "region": "Ile-de-France",
    "evenements": []
  },
  "A10378BA": {
    "nom": "Participant A10378BA",
    "region": "Ile-de-France",
    "evenements": []
  },
  "C700EECF": {
    "nom": "Participant C700EECF",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "A8028EE5": {
    "nom": "Participant A8028EE5",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "1F29AC28": {
    "nom": "Participant 1F29AC28",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "EF6E0FF1": {
    "nom": "Participant EF6E0FF1",
    "region": "Franche-Comté",
    "evenements": []
  },
  "69F3E75D": {
    "nom": "Participant 69F3E75D",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "81BA54E5": {
    "nom": "Participant 81BA54E5",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "98165ED6": {
    "nom": "Participant 98165ED6",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "174C3DF1": {
    "nom": "Participant 174C3DF1",
    "region": "Basse-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "ADD146F5": {
    "nom": "Participant ADD146F5",
    "region": "Centre-Val de Loire",
    "evenements": []
  },
  "E7A6F8E6": {
    "nom": "Participant E7A6F8E6",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "D0E3097C": {
    "nom": "Participant D0E3097C",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "7A2B4923": {
    "nom": "Participant 7A2B4923",
    "region": "Inconnue",
    "evenements": []
  },
  "C99C444D": {
    "nom": "Participant C99C444D",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "7EFE34E4": {
    "nom": "Participant 7EFE34E4",
    "region": "Poitou-Charentes",
    "evenements": []
  },
  "9F1D6A50": {
    "nom": "Participant 9F1D6A50",
    "region": "Nice-Corse",
    "evenements": []
  },
  "14929B6D": {
    "nom": "Participant 14929B6D",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "97F5E2A6": {
    "nom": "Participant 97F5E2A6",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "B8120A36": {
    "nom": "Participant B8120A36",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "561AFD6E": {
    "nom": "Participant 561AFD6E",
    "region": "Bretagne",
    "evenements": []
  },
  "53A6FC69": {
    "nom": "Participant 53A6FC69",
    "region": "Nice-Corse",
    "evenements": []
  },
  "19AF34F1": {
    "nom": "Participant 19AF34F1",
    "region": "Bourgogne",
    "evenements": []
  },
  "A54242C0": {
    "nom": "Participant A54242C0",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "FA98CCC3": {
    "nom": "Participant FA98CCC3",
    "region": "Ile-de-France",
    "evenements": []
  },
  "74392888": {
    "nom": "Participant 74392888",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "B5DECEAF": {
    "nom": "Participant B5DECEAF",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "407C1D5E": {
    "nom": "Participant 407C1D5E",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "6EB7E092": {
    "nom": "Participant 6EB7E092",
    "region": "Inconnue",
    "evenements": []
  },
  "4187B794": {
    "nom": "Participant 4187B794",
    "region": "Lyon",
    "evenements": []
  },
  "D8060C46": {
    "nom": "Participant D8060C46",
    "region": "Grenoble",
    "evenements": []
  },
  "2123CE2D": {
    "nom": "Participant 2123CE2D",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "51209909": {
    "nom": "Participant 51209909",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "A4CD107B": {
    "nom": "Participant A4CD107B",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "733C37C5": {
    "nom": "Participant 733C37C5",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "91FAC560": {
    "nom": "Participant 91FAC560",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "042C8F85": {
    "nom": "Participant 042C8F85",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "821C02F1": {
    "nom": "Participant 821C02F1",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "B3BD6D2D": {
    "nom": "Participant B3BD6D2D",
    "region": "La Réunion",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "233ECBED": {
    "nom": "Participant 233ECBED",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "4D7297FC": {
    "nom": "Participant 4D7297FC",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "B6DFC907": {
    "nom": "Participant B6DFC907",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "8198E41E": {
    "nom": "Participant 8198E41E",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "3C14B149": {
    "nom": "Participant 3C14B149",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E16D1310": {
    "nom": "Participant E16D1310",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "E39E1F47": {
    "nom": "Participant E39E1F47",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "8C5980D7": {
    "nom": "Participant 8C5980D7",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "AEF10781": {
    "nom": "Participant AEF10781",
    "region": "Aix-Marseille",
    "evenements": []
  },
  "5B54AC2C": {
    "nom": "Participant 5B54AC2C",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "F32CAD11": {
    "nom": "Participant F32CAD11",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "7D6C2981": {
    "nom": "Participant 7D6C2981",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "C22CE456": {
    "nom": "Participant C22CE456",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "2800289B": {
    "nom": "Participant 2800289B",
    "region": "Inconnue",
    "evenements": []
  },
  "9D467E16": {
    "nom": "Participant 9D467E16",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "02C70EE6": {
    "nom": "Participant 02C70EE6",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "2E250F02": {
    "nom": "Participant 2E250F02",
    "region": "MAROC",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "F57CEDC8": {
    "nom": "Participant F57CEDC8",
    "region": "Champagne-Ardenne",
    "evenements": [
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "9F8D728C": {
    "nom": "Participant 9F8D728C",
    "region": "Inconnue",
    "evenements": []
  },
  "FD781358": {
    "nom": "Participant FD781358",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E5C83D20": {
    "nom": "Participant E5C83D20",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "A8C656DD": {
    "nom": "Participant A8C656DD",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "BF63F828": {
    "nom": "Participant BF63F828",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Enfant",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "170C60C6": {
    "nom": "Participant 170C60C6",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "6B50FF90": {
    "nom": "Participant 6B50FF90",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "45F156FD": {
    "nom": "Participant 45F156FD",
    "region": "Nice-Corse",
    "evenements": []
  },
  "8D022F9D": {
    "nom": "Participant 8D022F9D",
    "region": "Ile-de-France",
    "evenements": []
  },
  "2CB21A8D": {
    "nom": "Participant 2CB21A8D",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "AE223D79": {
    "nom": "Participant AE223D79",
    "region": "LUXEMBOURG",
    "evenements": []
  },
  "AA530DE1": {
    "nom": "Participant AA530DE1",
    "region": "Ile-de-France",
    "evenements": []
  },
  "96B4E6DB": {
    "nom": "Participant 96B4E6DB",
    "region": "Strasbourg",
    "evenements": []
  },
  "979848AF": {
    "nom": "Participant 979848AF",
    "region": "Nice-Corse",
    "evenements": []
  },
  "3327C751": {
    "nom": "Participant 3327C751",
    "region": "Clermont-Ferrand",
    "evenements": [
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "9CF0DB67": {
    "nom": "Participant 9CF0DB67",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "1BC2A999": {
    "nom": "Participant 1BC2A999",
    "region": "Nice-Corse",
    "evenements": []
  },
  "70EACCE7": {
    "nom": "Participant 70EACCE7",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "E619869C": {
    "nom": "Participant E619869C",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "C6854D07": {
    "nom": "Participant C6854D07",
    "region": "Présidente",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "DA3669C0": {
    "nom": "Participant DA3669C0",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "64FCD1FF": {
    "nom": "Participant 64FCD1FF",
    "region": "Bureau national",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "E75B5B2A": {
    "nom": "Participant E75B5B2A",
    "region": "Montpellier",
    "evenements": []
  },
  "D9F996B8": {
    "nom": "Participant D9F996B8",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "B59361D6": {
    "nom": "Participant B59361D6",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "378A8101": {
    "nom": "Participant 378A8101",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "6A87E9FC": {
    "nom": "Participant 6A87E9FC",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "8825376A": {
    "nom": "Participant 8825376A",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "CA99DF66": {
    "nom": "Participant CA99DF66",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "99011B68": {
    "nom": "Participant 99011B68",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "AF584EC9": {
    "nom": "Participant AF584EC9",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "0FAF6799": {
    "nom": "Participant 0FAF6799",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "DA6D753A": {
    "nom": "Participant DA6D753A",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "6B4674B3": {
    "nom": "Participant 6B4674B3",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "24F446D2": {
    "nom": "Participant 24F446D2",
    "region": "Picardie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "020F62DF": {
    "nom": "Participant 020F62DF",
    "region": "Nice-Corse",
    "evenements": []
  },
  "60259B2A": {
    "nom": "Participant 60259B2A",
    "region": "Nice-Corse",
    "evenements": []
  },
  "899334FB": {
    "nom": "Participant 899334FB",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "BB7AA529": {
    "nom": "Participant BB7AA529",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "DA35DAE1": {
    "nom": "Participant DA35DAE1",
    "region": "Nice-Corse",
    "evenements": []
  },
  "1F20720B": {
    "nom": "Participant 1F20720B",
    "region": "Strasbourg",
    "evenements": []
  },
  "B6C8C51F": {
    "nom": "Participant B6C8C51F",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "09806C48": {
    "nom": "Participant 09806C48",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "DE06D21F": {
    "nom": "Participant DE06D21F",
    "region": "Ile-de-France",
    "evenements": []
  },
  "E7D7E4E0": {
    "nom": "Participant E7D7E4E0",
    "region": "Inconnue",
    "evenements": []
  },
  "802A7BEE": {
    "nom": "Participant 802A7BEE",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "BEC97EB6": {
    "nom": "Participant BEC97EB6",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "415AA180": {
    "nom": "Participant 415AA180",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "8B44BBF1": {
    "nom": "Participant 8B44BBF1",
    "region": "Strasbourg",
    "evenements": []
  },
  "625A756D": {
    "nom": "Participant 625A756D",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Enfant",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "BB2B88E9": {
    "nom": "Participant BB2B88E9",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "855F1AAE": {
    "nom": "Participant 855F1AAE",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "89C756F4": {
    "nom": "Participant 89C756F4",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "D1677DB4": {
    "nom": "Participant D1677DB4",
    "region": "Nantes",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "A0BEA557": {
    "nom": "Participant A0BEA557",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "5AC6DB73": {
    "nom": "Participant 5AC6DB73",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "BE4024BB": {
    "nom": "Participant BE4024BB",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "765F225D": {
    "nom": "Participant 765F225D",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E04C1CCB": {
    "nom": "Participant E04C1CCB",
    "region": "Nice-Corse",
    "evenements": []
  },
  "344E1323": {
    "nom": "Participant 344E1323",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "858D2E58": {
    "nom": "Participant 858D2E58",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "EC123DED": {
    "nom": "Participant EC123DED",
    "region": "Basse-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      }
    ]
  },
  "551C6C63": {
    "nom": "Participant 551C6C63",
    "region": "Nice-Corse",
    "evenements": []
  },
  "F8BBDC55": {
    "nom": "Participant F8BBDC55",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "9AB2467A": {
    "nom": "Participant 9AB2467A",
    "region": "Lille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "51DCC516": {
    "nom": "Participant 51DCC516",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "F16CCC52": {
    "nom": "Participant F16CCC52",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "557FC9A3": {
    "nom": "Participant 557FC9A3",
    "region": "Poitou-Charentes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "C3B8050C": {
    "nom": "Participant C3B8050C",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "DA254131": {
    "nom": "Participant DA254131",
    "region": "Nantes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "B814BD3D": {
    "nom": "Participant B814BD3D",
    "region": "Nantes",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "4F084A0D": {
    "nom": "Participant 4F084A0D",
    "region": "Ile-de-France",
    "evenements": []
  },
  "0CA70504": {
    "nom": "Participant 0CA70504",
    "region": "Bureau national",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E16FC520": {
    "nom": "Participant E16FC520",
    "region": "Limoges",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "EA55B491": {
    "nom": "Participant EA55B491",
    "region": "Nice-Corse",
    "evenements": []
  },
  "A422CB6A": {
    "nom": "Participant A422CB6A",
    "region": "Poitou-Charentes",
    "evenements": []
  },
  "10A75CA1": {
    "nom": "Participant 10A75CA1",
    "region": "Nice-Corse",
    "evenements": []
  },
  "2D1C8438": {
    "nom": "Participant 2D1C8438",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "0E2D9B8E": {
    "nom": "Participant 0E2D9B8E",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      }
    ]
  },
  "67114771": {
    "nom": "Participant 67114771",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "B9B3CB77": {
    "nom": "Participant B9B3CB77",
    "region": "Picardie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "BFB6DB6D": {
    "nom": "Participant BFB6DB6D",
    "region": "Nice-Corse",
    "evenements": []
  },
  "A74DA605": {
    "nom": "Participant A74DA605",
    "region": "Nice-Corse",
    "evenements": []
  },
  "E601968F": {
    "nom": "Participant E601968F",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "6E31EB22": {
    "nom": "Participant 6E31EB22",
    "region": "Inconnue",
    "evenements": []
  },
  "76F1BC74": {
    "nom": "Participant 76F1BC74",
    "region": "Inconnue",
    "evenements": []
  },
  "194CD94E": {
    "nom": "Participant 194CD94E",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "77652862": {
    "nom": "Participant 77652862",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "68882D32": {
    "nom": "Participant 68882D32",
    "region": "Strasbourg",
    "evenements": []
  },
  "48BE7913": {
    "nom": "Participant 48BE7913",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "A1982822": {
    "nom": "Participant A1982822",
    "region": "Strasbourg",
    "evenements": []
  },
  "BC3BFC75": {
    "nom": "Participant BC3BFC75",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "65E08C4A": {
    "nom": "Participant 65E08C4A",
    "region": "SUISSE",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "C80DEFBB": {
    "nom": "Participant C80DEFBB",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "EC085A33": {
    "nom": "Participant EC085A33",
    "region": "Strasbourg",
    "evenements": []
  },
  "F7C9B2CD": {
    "nom": "Participant F7C9B2CD",
    "region": "Ile-de-France",
    "evenements": []
  },
  "5746116C": {
    "nom": "Participant 5746116C",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "FBF5DA66": {
    "nom": "Participant FBF5DA66",
    "region": "Aix-Marseille",
    "evenements": []
  },
  "C5D84E56": {
    "nom": "Participant C5D84E56",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "7E255455": {
    "nom": "Participant 7E255455",
    "region": "Bourgogne",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "669EA869": {
    "nom": "Participant 669EA869",
    "region": "Nice-Corse",
    "evenements": []
  },
  "F08DBB18": {
    "nom": "Participant F08DBB18",
    "region": "Ile-de-France",
    "evenements": []
  },
  "517EB7A1": {
    "nom": "Participant 517EB7A1",
    "region": "Aix-Marseille",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "84DE7FF9": {
    "nom": "Participant 84DE7FF9",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Enfant",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "D54C2FC7": {
    "nom": "Participant D54C2FC7",
    "region": "Ile-de-France",
    "evenements": []
  },
  "BF951082": {
    "nom": "Participant BF951082",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "E2FCC285": {
    "nom": "Participant E2FCC285",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "8643ADAE": {
    "nom": "Participant 8643ADAE",
    "region": "BELGIQUE ",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "F220573F": {
    "nom": "Participant F220573F",
    "region": "Nice-Corse",
    "evenements": []
  },
  "C7FB1BC1": {
    "nom": "Participant C7FB1BC1",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "A269F85B": {
    "nom": "Participant A269F85B",
    "region": "Ile-de-France",
    "evenements": []
  },
  "4C0436A3": {
    "nom": "Participant 4C0436A3",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "2639A3EC": {
    "nom": "Participant 2639A3EC",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "86BAC506": {
    "nom": "Participant 86BAC506",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "BD04FD3C": {
    "nom": "Participant BD04FD3C",
    "region": "Secrétaire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "D78B24A2": {
    "nom": "Participant D78B24A2",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "A40082AB": {
    "nom": "Participant A40082AB",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "E9F1E175": {
    "nom": "Participant E9F1E175",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "D5B2AE18": {
    "nom": "Participant D5B2AE18",
    "region": "Aix-Marseille",
    "evenements": []
  },
  "740E58AE": {
    "nom": "Participant 740E58AE",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "CD6AEFA2": {
    "nom": "Participant CD6AEFA2",
    "region": "Nice-Corse",
    "evenements": []
  },
  "6B16B5AB": {
    "nom": "Participant 6B16B5AB",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "18D2B558": {
    "nom": "Participant 18D2B558",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "3C0BF7C5": {
    "nom": "Participant 3C0BF7C5",
    "region": "Nice-Corse",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "79FFC6D8": {
    "nom": "Participant 79FFC6D8",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "6EC8D4B4": {
    "nom": "Participant 6EC8D4B4",
    "region": "Bureau national",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Jeu enquête",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "C07C99C7": {
    "nom": "Participant C07C99C7",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "75A9158F": {
    "nom": "Participant 75A9158F",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "F6609C6E": {
    "nom": "Participant F6609C6E",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "254A3A0C": {
    "nom": "Participant 254A3A0C",
    "region": "Lyon",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "739985E2": {
    "nom": "Participant 739985E2",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      }
    ]
  },
  "0AEFB31A": {
    "nom": "Participant 0AEFB31A",
    "region": "Aix-Marseille",
    "evenements": []
  },
  "D2EDFF2D": {
    "nom": "Participant D2EDFF2D",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "B37AEA77": {
    "nom": "Participant B37AEA77",
    "region": "Basse-Normandie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "BB0D87B5": {
    "nom": "Participant BB0D87B5",
    "region": "Franche-Comté",
    "evenements": []
  },
  "971F041E": {
    "nom": "Participant 971F041E",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "4C1A7E77": {
    "nom": "Participant 4C1A7E77",
    "region": "Nice-Corse",
    "evenements": []
  },
  "A882394D": {
    "nom": "Participant A882394D",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      }
    ]
  },
  "49FD8F5B": {
    "nom": "Participant 49FD8F5B",
    "region": "Grenoble",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "D887ECF4": {
    "nom": "Participant D887ECF4",
    "region": "Picardie",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Lundi 9h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      }
    ]
  },
  "D0D73A66": {
    "nom": "Participant D0D73A66",
    "region": "La Réunion",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "82935162": {
    "nom": "Participant 82935162",
    "region": "BELGIQUE",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "6C47CF8E": {
    "nom": "Participant 6C47CF8E",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "9E222C70": {
    "nom": "Participant 9E222C70",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "70EFA6B8": {
    "nom": "Participant 70EFA6B8",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "DA42D2D3": {
    "nom": "Participant DA42D2D3",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Découverte ville",
        "horaire": "Dimanche 9h15"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Dimanche 14h45"
      }
    ]
  },
  "49FE2CEB": {
    "nom": "Participant 49FE2CEB",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite SHD",
        "horaire": "Mardi 14h"
      }
    ]
  },
  "EB1EFB21": {
    "nom": "Participant EB1EFB21",
    "region": "Haute-Normandie",
    "evenements": []
  },
  "CC15EA5F": {
    "nom": "Participant CC15EA5F",
    "region": "Nice-Corse",
    "evenements": []
  },
  "59FA8C7E": {
    "nom": "Participant 59FA8C7E",
    "region": "Nice-Corse",
    "evenements": []
  },
  "30049577": {
    "nom": "Participant 30049577",
    "region": "Lyon",
    "evenements": []
  },
  "B16458E7": {
    "nom": "Participant B16458E7",
    "region": "Montpellier",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Circuit Fontaines",
        "horaire": "Mardi 14h"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "6F0860E0": {
    "nom": "Participant 6F0860E0",
    "region": "Bretagne",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "1FB9122A": {
    "nom": "Participant 1FB9122A",
    "region": "Toulouse",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      }
    ]
  },
  "1DA33446": {
    "nom": "Participant 1DA33446",
    "region": "Lyon",
    "evenements": []
  },
  "3964195D": {
    "nom": "Participant 3964195D",
    "region": "Lyon",
    "evenements": []
  },
  "B159D9EF": {
    "nom": "Participant B159D9EF",
    "region": "Lyon",
    "evenements": []
  },
  "F6BDF9DC": {
    "nom": "Participant F6BDF9DC",
    "region": "Ile-de-France",
    "evenements": []
  },
  "B8A409E9": {
    "nom": "Participant B8A409E9",
    "region": "Aquitaine",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "96D5891E": {
    "nom": "Participant 96D5891E",
    "region": "Nice-Corse",
    "evenements": []
  },
  "91B99E28": {
    "nom": "Participant 91B99E28",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "43FD12C2": {
    "nom": "Participant 43FD12C2",
    "region": "Lorraine",
    "evenements": []
  },
  "2DE18A5B": {
    "nom": "Participant 2DE18A5B",
    "region": "Lorraine",
    "evenements": [
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "467B150D": {
    "nom": "Participant 467B150D",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "48247814": {
    "nom": "Participant 48247814",
    "region": "Ile-de-France",
    "evenements": []
  },
  "7B63379F": {
    "nom": "Participant 7B63379F",
    "region": "Centre-Val de Loire",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "2990EEBE": {
    "nom": "Participant 2990EEBE",
    "region": "Haute-Normandie",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Dimanche midi"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Mardi midi"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Visite Rade Adulte",
        "horaire": "Mardi 13h30"
      },
      {
        "nom": "Conférence L1-01",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "150D662D": {
    "nom": "Participant 150D662D",
    "region": "Lyon",
    "evenements": []
  },
  "9D396D24": {
    "nom": "Participant 9D396D24",
    "region": "Ile-de-France",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Conférence L1-02",
        "horaire": "Lundi 8h30"
      }
    ]
  },
  "425765EA": {
    "nom": "Participant 425765EA",
    "region": "Strasbourg",
    "evenements": [
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  },
  "3413CCBE": {
    "nom": "Participant 3413CCBE",
    "region": "Inconnue",
    "evenements": [
      {
        "nom": "Histoire en musique Adulte",
        "horaire": "Samedi 20h30"
      },
      {
        "nom": "Repas Festif",
        "horaire": "Lundi 19h30"
      },
      {
        "nom": "Repas APMEP",
        "horaire": "Lundi midi"
      }
    ]
  }
};
// Configuration Supabase
const supabaseUrl = 'https://nbrutmsaunnenjbccpmb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icnV0bXNhdW5uZW5qYmNjcG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MDQ2MDAsImV4cCI6MjA2NzQ4MDYwMH0.NoObPP9vpl-ME0f8oYwXVtf6nuTpVbmEuoWMmbyCrL4'

// Initialisation des variables globales
let supabase = null;
let html5QrCode = null;
let currentParticipant = null;
let validationsData = {};
let realtimeChannel = null;

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  initializeEventListeners();
  initializeSupabase();
});

// Initialisation des événements
function initializeEventListeners() {
  // Gestion des onglets
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.dataset.tab;
      switchTab(tabName);
    });
  });

  // Scanner QR
  document.getElementById('startScan').addEventListener('click', startQRScanner);
  document.getElementById('stopScan').addEventListener('click', stopQRScanner);
  document.getElementById('qr-file-input').addEventListener('change', handleFileUpload);

  // Recherche par ID
  document.getElementById('searchBtn').addEventListener('click', searchParticipant);
  document.getElementById('searchId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchParticipant();
    }
  });

  // Boutons de test
  document.querySelectorAll('.test-id-btn').forEach(button => {
    button.addEventListener('click', function() {
      const testId = this.dataset.id;
      displayParticipant(testId);
    });
  });

  document.getElementById('testConnection').addEventListener('click', testSupabaseConnection);
}

// Initialisation de l'application
function initializeApp() {
  updateConnectionStatus('Initialisation...', 'info');
  loadValidationsData();
  updateStatistics();
}

// Initialisation de Supabase
async function initializeSupabase() {
  try {
    if (supabaseUrl === 'VOTRE_SUPABASE_URL' || supabaseKey === 'VOTRE_SUPABASE_ANON_KEY') {
      updateConnectionStatus('Configuration Supabase requise', 'warning');
      return;
    }
	supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    // Authentification anonyme
    const { data, error } = await supabase.auth.signInAnonymously();

    if (error) {
      throw error;
    }

    updateConnectionStatus('Connecté à Supabase', 'success');

    // Charger les données existantes
    await loadValidationsFromSupabase();

    // Initialiser les subscriptions en temps réel
    initializeRealtimeSubscriptions();

  } catch (error) {
    console.error('Erreur initialisation Supabase:', error);
    updateConnectionStatus('Erreur connexion Supabase', 'error');
  }
}


// Gestion des onglets
function switchTab(tabName) {
  // Mise à jour des boutons
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Mise à jour du contenu
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');

  // Mise à jour des statistiques si on va sur l'onglet statistiques
  if (tabName === 'statistiques') {
    updateStatistics();
  }
}

// Scanner QR
function startQRScanner() {
  const qrReaderElement = document.getElementById('qr-reader');

  if (!html5QrCode) {
    html5QrCode = new Html5Qrcode("qr-reader");
  }

  const config = {
    fps: 10,
    qrbox: { width: 250, height: 250 },
    aspectRatio: 1.0
  };

  html5QrCode.start(
    { facingMode: "environment" },
    config,
    (decodedText) => {
      handleQRCodeResult(decodedText);
    },
    (errorMessage) => {
      // Ignorer les erreurs de scan normales
    }
  ).then(() => {
    document.getElementById('startScan').classList.add('hidden');
    document.getElementById('stopScan').classList.remove('hidden');
  }).catch(err => {
    console.error('Erreur démarrage scanner:', err);
    showScanResult('Erreur: Impossible d\'accéder à la caméra', 'error');
  });
}

function stopQRScanner() {
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      document.getElementById('startScan').classList.remove('hidden');
      document.getElementById('stopScan').classList.add('hidden');
    }).catch(err => {
      console.error('Erreur arrêt scanner:', err);
    });
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    if (!html5QrCode) {
      html5QrCode = new Html5Qrcode("qr-reader");
    }

    html5QrCode.scanFile(file, true)
      .then(decodedText => {
        handleQRCodeResult(decodedText);
      })
      .catch(err => {
        showScanResult('Erreur: Aucun QR code détecté dans l\'image', 'error');
      });
  }
}

function handleQRCodeResult(decodedText) {
  showScanResult(`QR Code détecté: ${decodedText}`, 'success');
  displayParticipant(decodedText);
}

function showScanResult(message, type) {
  const resultDiv = document.getElementById('scan-result');
  resultDiv.textContent = message;
  resultDiv.className = `scan-result test-result ${type}`;
  resultDiv.classList.remove('hidden');
}

// Recherche par ID
function searchParticipant() {
  const searchId = document.getElementById('searchId').value.trim();
  if (!searchId) {
    showSearchResult('Veuillez entrer un ID', 'error');
    return;
  }

  displayParticipant(searchId);
}

function showSearchResult(message, type) {
  const resultDiv = document.getElementById('search-result');
  resultDiv.textContent = message;
  resultDiv.className = `search-result test-result ${type}`;
  resultDiv.classList.remove('hidden');
}

// Affichage des participants
function displayParticipant(participantId) {
  const participant = participantsDatabase[participantId];

  if (!participant) {
    showSearchResult('Participant non trouvé', 'error');
    return;
  }

  currentParticipant = participantId;

  // Mettre à jour l'interface
  document.getElementById('participantName').textContent = participant.nom;
  document.getElementById('participantRegion').textContent = `Région: ${participant.region}`;

  // Afficher les événements
  displayEvents(participantId, participant.evenements);

  // Afficher la section participant
  document.getElementById('participantDisplay').classList.remove('hidden');

  showSearchResult(`Participant ${participantId} trouvé`, 'success');
}

function displayEvents(participantId, events) {
  const eventsList = document.getElementById('eventsList');
  eventsList.innerHTML = '';

  if (events.length === 0) {
    eventsList.innerHTML = '<p>Aucun événement pour ce participant.</p>';
    return;
  }

  events.forEach((event, index) => {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event-item';
    eventDiv.setAttribute('tabindex', '0');

    const status = getEventStatus(participantId, index);
    eventDiv.classList.add(status);

    eventDiv.innerHTML = `
      <div class="event-info">
        <div class="event-name">${event.nom}</div>
        <div class="event-schedule">${event.horaire}</div>
      </div>
      <div class="event-status ${status}">
        ${getStatusLabel(status)}
      </div>
      <div class="sync-indicator" style="display: none;"></div>
    `;

    eventDiv.addEventListener('click', () => toggleEventStatus(participantId, index));
    eventDiv.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleEventStatus(participantId, index);
      }
    });

    eventsList.appendChild(eventDiv);
  });
}

function getEventStatus(participantId, eventIndex) {
  const key = `${participantId}-${eventIndex}`;
  return validationsData[key] || 'none';
}

function getStatusLabel(status) {
  switch(status) {
    case 'validated': return 'Validé';
    case 'invalidated': return 'Invalidé';
    default: return 'Non traité';
  }
}

function toggleEventStatus(participantId, eventIndex) {
  const currentStatus = getEventStatus(participantId, eventIndex);
  let newStatus;

  // Cycle: none -> validated -> invalidated -> none
  switch(currentStatus) {
    case 'none': newStatus = 'validated'; break;
    case 'validated': newStatus = 'invalidated'; break;
    case 'invalidated': newStatus = 'none'; break;
    default: newStatus = 'validated';
  }

  updateEventValidation(participantId, eventIndex, newStatus);
}

async function updateEventValidation(participantId, eventIndex, status) {
  const key = `${participantId}-${eventIndex}`;
  const syncIndicator = document.querySelector(`[data-key="${key}"] .sync-indicator`);

  // Mise à jour optimiste de l'interface
  validationsData[key] = status;
  updateEventDisplay(participantId, eventIndex, status);

  // Afficher l'indicateur de synchronisation
  if (syncIndicator) {
    syncIndicator.style.display = 'block';
    syncIndicator.classList.add('syncing');
  }

  // Sauvegarder dans Supabase
  if (supabase) {
    try {
      const { error } = await supabase
        .from('event_validations')
        .upsert({
          participant_id: participantId,
          event_index: eventIndex,
          status: status,
          validated_at: new Date().toISOString()
        });

      if (error) throw error;

      // Synchronisation réussie
      if (syncIndicator) {
        syncIndicator.classList.remove('syncing');
        setTimeout(() => {
          syncIndicator.style.display = 'none';
        }, 1000);
      }

    } catch (error) {
      console.error('Erreur sauvegarde:', error);

      // Afficher l'erreur
      if (syncIndicator) {
        syncIndicator.classList.remove('syncing');
        syncIndicator.classList.add('error');
      }
    }
  }

  // Mettre à jour les statistiques
  updateStatistics();
}

function updateEventDisplay(participantId, eventIndex, status) {
  const eventsList = document.getElementById('eventsList');
  const eventItems = eventsList.querySelectorAll('.event-item');

  if (eventItems[eventIndex]) {
    const eventItem = eventItems[eventIndex];
    const statusElement = eventItem.querySelector('.event-status');

    // Mettre à jour les classes
    eventItem.className = `event-item ${status}`;
    statusElement.className = `event-status ${status}`;
    statusElement.textContent = getStatusLabel(status);
  }
}

// Chargement des données depuis Supabase
async function loadValidationsFromSupabase() {
  if (!supabase) return;

  try {
    const { data, error } = await supabase
      .from('event_validations')
      .select('*');

    if (error) throw error;

    // Mettre à jour les données locales
    data.forEach(validation => {
      const key = `${validation.participant_id}-${validation.event_index}`;
      validationsData[key] = validation.status;
    });

    // Mettre à jour l'affichage si un participant est sélectionné
    if (currentParticipant) {
      const participant = participantsDatabase[currentParticipant];
      if (participant) {
        displayEvents(currentParticipant, participant.evenements);
      }
    }

    updateStatistics();

  } catch (error) {
    console.error('Erreur chargement données:', error);
  }
}

// Subscriptions en temps réel
function initializeRealtimeSubscriptions() {
  if (!supabase) return;

  realtimeChannel = supabase
    .channel('validations')
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'event_validations' },
      handleRealTimeUpdate
    )
    .subscribe();
}

function handleRealTimeUpdate(payload) {
  const { eventType, new: newRecord, old: oldRecord } = payload;

  if (eventType === 'INSERT' || eventType === 'UPDATE') {
    const key = `${newRecord.participant_id}-${newRecord.event_index}`;
    validationsData[key] = newRecord.status;

    // Mettre à jour l'affichage si c'est le participant actuel
    if (currentParticipant === newRecord.participant_id) {
      updateEventDisplay(newRecord.participant_id, newRecord.event_index, newRecord.status);
    }
  }

  updateStatistics();
}

// Chargement des données locales
function loadValidationsData() {
  // Ici on pourrait charger depuis une source locale si nécessaire
  // Pour l'instant, on initialise avec des données vides
  validationsData = {};
}

// Mise à jour des statistiques
function updateStatistics() {
  const stats = calculateStatistics();

  document.getElementById('totalValidations').textContent = stats.totalValidations;
  document.getElementById('totalInvalidations').textContent = stats.totalInvalidations;
  document.getElementById('validationRate').textContent = `${stats.validationRate}%`;

  displayEventStatistics(stats.eventStats);
}


function calculateStatistics() {
  const stats = {
    totalValidations: 0,
    totalInvalidations: 0,
    validationRate: 0,
    eventStats: {}
  };

  // Analyser toutes les validations
  Object.values(validationsData).forEach(status => {
    if (status === 'validated') {
      stats.totalValidations++;
    } else if (status === 'invalidated') {
      stats.totalInvalidations++;
    }
  });

  // Calculer le taux de validation
  const total = stats.totalValidations + stats.totalInvalidations;
  if (total > 0) {
    stats.validationRate = Math.round((stats.totalValidations / total) * 100);
  }

  // Statistiques par événement
  Object.keys(participantsDatabase).forEach(participantId => {
    const participant = participantsDatabase[participantId];
    participant.evenements.forEach((event, index) => {
	  // Si c'est un repas, on forme un nom unique "Repas APMEP (Lundi midi)"
		let eventName = event.nom;
		if (event.nom && event.nom.toLowerCase().includes("repas") && event.horaire) {
			eventName = event.nom + " (" + event.horaire + ")";
		}
		if (!stats.eventStats[eventName]) {
			stats.eventStats[eventName] = {
			validated: 0,
			invalidated: 0,
			none: 0
			};
      }

      const status = getEventStatus(participantId, index);
      stats.eventStats[eventName][status]++;

    });
  });

  return stats;
}

function displayEventStatistics(eventStats) {
  const eventStatsDiv = document.getElementById('eventStats');
  eventStatsDiv.innerHTML = '';

  Object.entries(eventStats).forEach(([eventName, counts]) => {
    const total = counts.validated + counts.invalidated + counts.none;
    const validationRate = total > 0 ? Math.round((counts.validated / total) * 100) : 0;

    const statDiv = document.createElement('div');
    statDiv.className = 'event-stat';
    statDiv.innerHTML = `
      <div class="event-stat-name">${eventName}</div>
      <div class="event-stat-counts">
        <div class="stat-count validated">
          ✓ ${counts.validated}
        </div>
        <div class="stat-count invalidated">
          ✗ ${counts.invalidated}
        </div>
        <div class="stat-count none">
          ○ ${counts.none}
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${validationRate}%"></div>
      </div>
    `;

    eventStatsDiv.appendChild(statDiv);
  });
}

// Test de connexion Supabase
async function testSupabaseConnection() {
  const testButton = document.getElementById('testConnection');
  const resultDiv = document.getElementById('connectionTest');

  testButton.textContent = 'Test en cours...';
  testButton.disabled = true;

  try {
    if (!supabase) {
      throw new Error('Supabase non initialisé');
    }

    // Test simple de lecture
    const { data, error } = await supabase
      .from('event_validations')
      .select('count', { count: 'exact' });

    if (error) throw error;

    resultDiv.textContent = `Connexion réussie! ${data.length} enregistrements trouvés.`;
    resultDiv.className = 'test-result success';

  } catch (error) {
    resultDiv.textContent = `Erreur de connexion: ${error.message}`;
    resultDiv.className = 'test-result error';
  } finally {
    testButton.textContent = 'Tester connexion';
    testButton.disabled = false;
    resultDiv.classList.remove('hidden');
  }
}

// Mise à jour du statut de connexion
function updateConnectionStatus(message, type) {
  const statusElement = document.getElementById('connectionStatus');
  statusElement.textContent = message;
  statusElement.className = `status status--${type}`;
}

// Nettoyage à la fermeture
window.addEventListener('beforeunload', () => {
  if (html5QrCode) {
    html5QrCode.stop().catch(err => console.error('Erreur arrêt scanner:', err));
  }

  if (realtimeChannel) {
    realtimeChannel.unsubscribe();
  }
});
