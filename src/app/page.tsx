import { DashboardClient } from "@/components/dashboard/DashboardClient";
import { RUNES, RUNEWORDS } from "@/constants/d2rData";

export default function Home() {
  return (
    <DashboardClient runes={RUNES} runewords={RUNEWORDS} />
  );
}