import weeksBetween from "./weeksBetween";

export const wukuNames: string[] = [
    "Sinta", "Landep", "Ukir", "Kulantir", "Tolu", "Gumbreg", "Wariga",
    "Warigadean", "Julungwangi", "Sungsang", "Dungulan", "Kuningan",
    "Langkir", "Medangsia", "Pujut", "Pahang", "Krulut", "Merakih",
    "Tambir", "Medangkungan", "Matal", "Uye", "Menail", "Prangbakat",
    "Bala", "Ugu", "Wayang", "Kelawu", "Dukut", "Watugunung"
];

const referenceDate: Date = new Date(2023, 12, 19);

function getWuku(current: Date): string {
    const betweenWeek = weeksBetween(referenceDate, current);
    const resetDate = Math.floor(betweenWeek / 30);
    const preDate = resetDate * 30; // 90 => 0
    const wukuIndex = betweenWeek - preDate;

    return wukuNames[wukuIndex];
}

export default getWuku;