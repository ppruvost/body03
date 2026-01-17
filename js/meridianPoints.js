/**
 * Base de données des 12 méridiens principaux et leurs points énergétiques.
 * Chaque méridien contient une liste de points avec leurs noms et positions relatives.
 * Les positions sont des suggestions et doivent être adaptées à votre modèle 3D.
 */

// Liste des 12 méridiens principaux
const meridians = [
    {
        name: "Poumon (P)",
        points: [
            { name: "P1", chineseName: "中府 (Zhōngfǔ)", position: { x: 0.3, y: 1.5, z: 0.1 } },
            { name: "P2", chineseName: "云门 (Yúnmén)", position: { x: 0.25, y: 1.4, z: 0.1 } },
            { name: "P3", chineseName: "天府 (Tiānfǔ)", position: { x: 0.2, y: 1.3, z: 0.1 } },
            { name: "P5", chineseName: "尺泽 (Chǐzé)", position: { x: 0.1, y: 0.9, z: 0.05 } },
            { name: "P7", chineseName: "列缺 (Lièquē)", position: { x: 0.05, y: 0.7, z: 0.05 } },
            { name: "P9", chineseName: "太渊 (Tàiyuān)", position: { x: 0.03, y: 0.5, z: 0.03 } },
            { name: "P11", chineseName: "少商 (Shàoshāng)", position: { x: 0.01, y: 0.3, z: 0.01 } },
        ]
    },
    {
        name: "Gros Intestin (GI)",
        points: [
            { name: "GI1", chineseName: "商阳 (Shāngyáng)", position: { x: 0.01, y: 0.3, z: -0.01 } },
            { name: "GI4", chineseName: "合谷 (Hégǔ)", position: { x: 0.1, y: 0.4, z: -0.05 } },
            { name: "GI10", chineseName: "手三里 (Shǒusānlǐ)", position: { x: 0.15, y: 0.6, z: -0.05 } },
            { name: "GI11", chineseName: "曲池 (Qūchí)", position: { x: 0.2, y: 0.8, z: -0.05 } },
            { name: "GI14", chineseName: "肩髃 (Jiānliáo)", position: { x: 0.3, y: 1.2, z: -0.05 } },
            { name: "GI15", chineseName: "肩髎 (Jiānyáo)", position: { x: 0.35, y: 1.3, z: -0.05 } },
            { name: "GI20", chineseName: "迎香 (Yíngxiāng)", position: { x: 0.25, y: 1.5, z: 0.1 } },
        ]
    },
    {
        name: "Estomac (E)",
        points: [
            { name: "E3", chineseName: "巨髎 (Jùliáo)", position: { x: 0.2, y: 1.4, z: 0.1 } },
            { name: "E9", chineseName: "人迎 (Rényíng)", position: { x: 0.15, y: 1.1, z: 0.1 } },
            { name: "E25", chineseName: "天枢 (Tiānshū)", position: { x: 0.1, y: 0.8, z: 0.2 } },
            { name: "E36", chineseName: "足三里 (Zúsānlǐ)", position: { x: 0.05, y: 0.3, z: 0.1 } },
            { name: "E44", chineseName: "内庭 (Nèitíng)", position: { x: 0.03, y: 0.1, z: 0.05 } },
            { name: "E45", chineseName: "厉兑 (Lìduì)", position: { x: 0.01, y: 0.05, z: 0.01 } },
        ]
    },
    {
        name: "Rate (Rte)",
        points: [
            { name: "Rte1", chineseName: "隐白 (Yǐnbái)", position: { x: 0.01, y: 0.05, z: 0.05 } },
            { name: "Rte3", chineseName: "太白 (Tàibái)", position: { x: 0.05, y: 0.2, z: 0.05 } },
            { name: "Rte6", chineseName: "三阴交 (Sānyīnjiāo)", position: { x: 0.1, y: 0.4, z: 0.1 } },
            { name: "Rte9", chineseName: "阴陵泉 (Yīnlíngquán)", position: { x: 0.15, y: 0.6, z: 0.1 } },
            { name: "Rte10", chineseName: "血海 (Xuèhǎi)", position: { x: 0.2, y: 0.7, z: 0.1 } },
        ]
    },
    {
        name: "Cœur (C)",
        points: [
            { name: "C3", chineseName: "少海 (Shàohǎi)", position: { x: 0.1, y: 0.5, z: 0.1 } },
            { name: "C5", chineseName: "通里 (Tōnglǐ)", position: { x: 0.05, y: 0.4, z: 0.05 } },
            { name: "C7", chineseName: "神门 (Shénmén)", position: { x: 0.03, y: 0.3, z: 0.03 } },
            { name: "C8", chineseName: "少府 (Shàofǔ)", position: { x: 0.02, y: 0.25, z: 0.02 } },
            { name: "C9", chineseName: "少冲 (Shàochōng)", position: { x: 0.01, y: 0.2, z: 0.01 } },
        ]
    },
    {
        name: "Intestin Grêle (IG)",
        points: [
            { name: "IG1", chineseName: "少泽 (Shàozé)", position: { x: 0.01, y: 0.2, z: -0.01 } },
            { name: "IG3", chineseName: "后溪 (Hòuxī)", position: { x: 0.03, y: 0.3, z: -0.03 } },
            { name: "IG8", chineseName: "小海 (Xiǎohǎi)", position: { x: 0.1, y: 0.5, z: -0.05 } },
            { name: "IG10", chineseName: "肩贞 (Jiānzhēn)", position: { x: 0.2, y: 0.9, z: -0.05 } },
            { name: "IG19", chineseName: "听宫 (Tīnggōng)", position: { x: 0.15, y: 1.4, z: -0.05 } },
        ]
    },
    {
        name: "Vessie (V)",
        points: [
            { name: "V10", chineseName: "天柱 (Tiānzhù)", position: { x: 0.1, y: 1.3, z: 0.1 } },
            { name: "V11", chineseName: "大杼 (Dàzhù)", position: { x: 0.15, y: 1.2, z: 0.1 } },
            { name: "V13", chineseName: "肺俞 (Fèishū)", position: { x: 0.2, y: 1.1, z: 0.1 } },
            { name: "V20", chineseName: "脾俞 (Píshū)", position: { x: 0.25, y: 0.9, z: 0.1 } },
            { name: "V40", chineseName: "委中 (Wěizhōng)", position: { x: 0.1, y: 0.4, z: 0.1 } },
            { name: "V60", chineseName: "昆仑 (Kūnlún)", position: { x: 0.05, y: 0.1, z: 0.05 } },
        ]
    },
    {
        name: "Rein (Rn)",
        points: [
            { name: "Rn1", chineseName: "涌泉 (Yǒngquán)", position: { x: 0.01, y: 0.01, z: 0.05 } },
            { name: "Rn3", chineseName: "太溪 (Tàixī)", position: { x: 0.05, y: 0.2, z: 0.05 } },
            { name: "Rn6", chineseName: "照海 (Zhàohǎi)", position: { x: 0.03, y: 0.3, z: 0.05 } },
            { name: "Rn7", chineseName: "复溜 (Fùliū)", position: { x: 0.07, y: 0.4, z: 0.07 } },
            { name: "Rn10", chineseName: "阴谷 (Yīngǔ)", position: { x: 0.15, y: 0.7, z: 0.1 } },
        ]
    },
    {
        name: "Maître Cœur (MC)",
        points: [
            { name: "MC3", chineseName: "曲泽 (Qūzé)", position: { x: 0.05, y: 0.5, z: 0.05 } },
            { name: "MC6", chineseName: "内关 (Nèiguān)", position: { x: 0.07, y: 0.4, z: 0.05 } },
            { name: "MC7", chineseName: "大陵 (Dàlíng)", position: { x: 0.03, y: 0.3, z: 0.03 } },
            { name: "MC8", chineseName: "劳宫 (Láogōng)", position: { x: 0.02, y: 0.25, z: 0.02 } },
            { name: "MC9", chineseName: "中冲 (Zhōngchōng)", position: { x: 0.01, y: 0.2, z: 0.01 } },
        ]
    },
    {
        name: "Triple Réchauffeur (TR)",
        points: [
            { name: "TR3", chineseName: "中渚 (Zhōngzhǔ)", position: { x: 0.05, y: 0.35, z: -0.05 } },
            { name: "TR5", chineseName: "外关 (Wàiguān)", position: { x: 0.1, y: 0.45, z: -0.05 } },
            { name: "TR10", chineseName: "天井 (Tiānjǐng)", position: { x: 0.15, y: 0.6, z: -0.05 } },
            { name: "TR14", chineseName: "肩髎 (Jiānyáo)", position: { x: 0.25, y: 1.1, z: -0.05 } },
            { name: "TR17", chineseName: "翳风 (Yìfēng)", position: { x: 0.2, y: 1.3, z: -0.05 } },
            { name: "TR23", chineseName: "丝竹空 (Sīzhúkōng)", position: { x: 0.15, y: 1.5, z: -0.05 } },
        ]
    },
    {
        name: "Vésicule Biliaire (VB)",
        points: [
            { name: "VB1", chineseName: "瞳子髎 (Tóngzǐliáo)", position: { x: 0.1, y: 1.5, z: 0.05 } },
            { name: "VB14", chineseName: "阳白 (Yángbái)", position: { x: 0.15, y: 1.4, z: 0.05 } },
            { name: "VB20", chineseName: "风池 (Fēngchí)", position: { x: 0.2, y: 1.2, z: 0.05 } },
            { name: "VB30", chineseName: "环跳 (Huántào)", position: { x: 0.3, y: 0.6, z: 0.1 } },
            { name: "VB34", chineseName: "阳陵泉 (Yánglíngquán)", position: { x: 0.25, y: 0.4, z: 0.05 } },
            { name: "VB41", chineseName: "足临泣 (Zúlínqì)", position: { x: 0.2, y: 0.2, z: 0.05 } },
        ]
    },
    {
        name: "Foie (F)",
        points: [
            { name: "F1", chineseName: "大敦 (Dàdūn)", position: { x: 0.01, y: 0.05, z: 0.05 } },
            { name: "F3", chineseName: "太冲 (Tàichōng)", position: { x: 0.05, y: 0.2, z: 0.05 } },
            { name: "F8", chineseName: "曲泉 (Qūquán)", position: { x: 0.15, y: 0.6, z: 0.05 } },
            { name: "F13", chineseName: "章门 (Zhāngmén)", position: { x: 0.25, y: 0.9, z: 0.1 } },
            { name: "F14", chineseName: "期门 (Qīmén)", position: { x: 0.2, y: 1.1, z: 0.1 } },
        ]
    }
];

// Exporter les méridiens pour une utilisation externe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = meridians; // Pour une utilisation avec Node.js
} else {
    window.meridians = meridians; // Pour une utilisation dans le navigateur
}
