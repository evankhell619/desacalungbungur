"use client"

import type React from "react"

interface OrgMember {
  name: string
  title: string
  color: string
  children?: OrgMember[]
}

interface OrgChartNodeProps {
  member: OrgMember
  level: number
}

const OrgChartNode: React.FC<OrgChartNodeProps> = ({ member, level }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          px-4 py-3 border-2 border-gray-300 rounded-lg text-center min-w-[140px] max-w-[180px] mb-4
          ${member.color} text-white shadow-md
        `}
      >
        <div className="font-bold text-xs uppercase whitespace-pre-line">{member.title}</div>
        {member.name && <div className="text-sm mt-1 font-medium">{member.name}</div>}
      </div>

      {member.children && member.children.length > 0 && (
        <>
          {/* Vertical line down */}
          <div className="w-0.5 h-6 bg-gray-400 mb-2"></div>

          {/* Horizontal line for multiple children */}
          {member.children.length > 1 && (
            <div className="relative mb-2">
              <div className="h-0.5 bg-gray-400" style={{ width: `${(member.children.length - 1) * 200}px` }}></div>
              {member.children.map((_, index) => (
                <div
                  key={index}
                  className="absolute w-0.5 h-6 bg-gray-400 -top-3"
                  style={{ left: `${index * 200}px` }}
                ></div>
              ))}
            </div>
          )}

          {/* Children nodes */}
          <div className="flex gap-8 justify-center flex-wrap">
            {member.children.map((child, index) => (
              <OrgChartNode key={`${child.name}-${index}`} member={child} level={level + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function OrganizationalChart() {
  const members: OrgMember = {
    name: "Suhendi",
    title: "BPD",
    color: "bg-yellow-400",
    children: [
      {
        name: "Ahyani",
        title: "Kepala Desa",
        color: "bg-red-600",
        children: [
          {
            name: "M. Subandi S.A.P",
            title: "Sekretaris Desa",
            color: "bg-black",
            children: [
              {
                name: "Hermawan",
                title: "Kasi Pemerintahan & Tata Tertib",
                color: "bg-blue-600",
              },
              {
                name: "Emang",
                title: "Staf Pengolaan Data",
                color: "bg-blue-600",
              },
              {
                name: "Asep Jumaidi",
                title: "Kaslekabang & Kesra",
                color: "bg-blue-600",
              },
              {
                name: "Ulpah Masupah",
                title: "Mantri Tani Desa",
                color: "bg-blue-600",
              },
              {
                name: "Madsuhi",
                title: "Kaur Keuangan",
                color: "bg-blue-600",
                children: [
                  {
                    name: "Gojali",
                    title: "Linmas Desa",
                    color: "bg-orange-400",
                    children: [
                      { name: "Ketua RW 1", title: "", color: "bg-green-500" },
                      { name: "Ketua RW 2", title: "", color: "bg-green-500" },
                      { name: "Ketua RW 3", title: "", color: "bg-green-500" },
                      { name: "Ketua RW 4", title: "", color: "bg-green-500" },
                      { name: "Ketua RW 5", title: "", color: "bg-green-500" },
                    ],
                  },
                ],
              },
              {
                name: "Samhadi",
                title: "Kaur Umum",
                color: "bg-blue-600",
                children: [
                  {
                    name: "Komarudin",
                    title: "Linmas Desa",
                    color: "bg-orange-400",
                  },
                ],
              },
              {
                name: "Kosong",
                title: "Bendahara Desa",
                color: "bg-blue-600",
                children: [
                  {
                    name: "Kosong",
                    title: "Linmas Desa",
                    color: "bg-orange-400",
                  },
                  {
                    name: "Kosong",
                    title: "Linmas Desa",
                    color: "bg-orange-400",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">BAGAN STRUKTUR PEMERINTAHAN DESA</h2>
        <h3 className="text-lg font-semibold text-gray-700">KANTOR DESA CALUNG BUNGUR KECAMATAN SAJIRA</h3>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1400px] flex justify-center py-8">
          <OrgChartNode member={members} level={0} />
        </div>
      </div>

      {/* Updated Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 border border-yellow-500 rounded"></div>
          <span>BPD</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 border border-red-700 rounded"></div>
          <span>Kepala Desa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-black border border-gray-800 rounded"></div>
          <span>Sekretaris Desa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 border border-blue-700 rounded"></div>
          <span>Kepala Seksi/Urusan & Staf</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 border border-orange-500 rounded"></div>
          <span>Linmas Desa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 border border-green-600 rounded"></div>
          <span>Ketua RW</span>
        </div>
      </div>

      {/* Organizational Summary */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Badan Permusyawaratan Desa</h4>
          <p className="text-sm text-yellow-700">Suhendi - BPD</p>
        </div>
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="font-semibold text-red-800 mb-2">Kepala Desa</h4>
          <p className="text-sm text-red-700">Ahyani</p>
        </div>
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Sekretaris Desa</h4>
          <p className="text-sm text-gray-700">M. Subandi S.A.P</p>
        </div>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Kepala Seksi & Urusan</h4>
          <p className="text-sm text-blue-700">7 Posisi (termasuk staf)</p>
        </div>
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-2">Linmas Desa</h4>
          <p className="text-sm text-orange-700">4 Personel</p>
        </div>
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">Ketua RW</h4>
          <p className="text-sm text-green-700">5 RW (001-005)</p>
        </div>
      </div>
    </div>
  )
}
