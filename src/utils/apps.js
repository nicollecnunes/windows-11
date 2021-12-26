import Battery from "../../public/icons/system/Battery.ico";
import Calendar from "../../public/icons/system/Calendar.ico";
import Folder from "../../public/icons/system/Folder.ico";
import Windows from "../../public/icons/system/Windows.ico";
import Cortana from "../../public/icons/system/Cortana.ico";
import Trash from "../../public/icons/system/Trash.ico";

import AdobePhotoshop from "../../public/icons/apps/AdobePhotoshop.ico";
import Chrome from "../../public/icons/apps/Chrome.ico";
import Discord from "../../public/icons/apps/Discord.ico";
import Docs from "../../public/icons/apps/Docs.ico";
import Edge from "../../public/icons/apps/Edge.ico";
import Email from "../../public/icons/apps/Email.ico";
import Git from "../../public/icons/apps/Git.ico";
import Nodejs from "../../public/icons/apps/Nodejs.ico";
import Paint from "../../public/icons/apps/Paint.ico";
import PopcornTime from "../../public/icons/apps/PopcornTime.ico";
import Powershell from "../../public/icons/apps/Powershell.ico";
import Python from "../../public/icons/apps/Python.ico";
import Spotify from "../../public/icons/apps/Spotify.ico";
import Steam from "../../public/icons/apps/Steam.ico";
import StickyNote from "../../public/icons/apps/StickyNote.ico";
import VLC from "../../public/icons/apps/VLC.ico";
import VSCode from "../../public/icons/apps/VSCode.ico";
import Word from "../../public/icons/apps/Word.ico";

export const desktopApps = [
  { name: "Recycle Bin", icon: Trash },
  { name: "Adobe Photoshop", icon: AdobePhotoshop },
  { name: "Google Chrome", icon: Chrome },
  { name: "Popcorn Time", icon: PopcornTime },
  { name: "Projects", icon: Folder },
];

export const pinnedApps = [
  { name: "Adobe Photoshop", icon: AdobePhotoshop },
  { name: "Google Chrome", icon: Chrome },
  { name: "Discord", icon: Discord },
  { name: "Microsoft Edge", icon: Edge },
  { name: "Git", icon: Git },
  { name: "Node JS", icon: Nodejs },
  { name: "Microsoft Word", icon: Word },
  { name: "Powershell", icon: Powershell },
];

export const recommendedApps = [
  { name: "Discord", icon: Discord },
  { name: "VS Code", icon: VSCode },
  { name: "Python (3.8.0)", icon: Python },
  { name: "Node JS (16.9.0)", icon: Nodejs },
];

export const taskbarApps = [
  { name: "Chrome", icon: Chrome },
  { name: "Discord", icon: Discord },
  { name: "VS Code", icon: VSCode },
  { name: "Git", icon: Git },
  { name: "Sticky Notes", icon: StickyNote },
  { name: "Spotify", icon: Spotify },
];

export const cortanaIcon = Cortana;
export const menuIcon = Windows;
export const calendarIcon = Calendar;
export const batteryIcon = Battery;
