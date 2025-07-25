"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { Bar, Pie, Doughnut } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export function DemographicCharts() {
  // Gender Distribution Data
  const genderData = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [1620, 1620], // Updated: 1620 male, 1620 female (total 3240)
        backgroundColor: ["#3B82F6", "#EC4899"],
        borderColor: ["#2563EB", "#DB2777"],
        borderWidth: 2,
      },
    ],
  }

  // Population by Kampung Data
  const kampungData = {
    labels: ["Karian Baru", "Pasir Angin", "Nanggela Baru", "Gubug PGRI", "Gubug Lama"],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [1575, 560, 280, 150, 675],
        backgroundColor: ["#10B981", "#F59E0B", "#8B5CF6", "#EF4444", "#06B6D4"],
        borderColor: ["#059669", "#D97706", "#7C3AED", "#DC2626", "#0891B2"],
        borderWidth: 2,
      },
    ],
  }

  // Age Distribution Data
  const ageData = {
    labels: ["0-5 tahun", "6-14 tahun", "15-64 tahun", "65+ tahun"],
    datasets: [
      {
        data: [243, 414, 2383, 199],
        backgroundColor: ["#06B6D4", "#10B981", "#F59E0B", "#EF4444"],
        borderColor: ["#0891B2", "#059669", "#D97706", "#DC2626"],
        borderWidth: 2,
      },
    ],
  }

  // Occupation Data
  const occupationData = {
    labels: ["Buruh Tani/Kebun", "Lain-lain", "Petani/Pekebun", "Berdagang", "Wiraswasta", "PNS"],
    datasets: [
      {
        data: [586, 476, 306, 87, 78, 10],
        backgroundColor: ["#10B981", "#8B5CF6", "#F59E0B", "#EF4444", "#06B6D4", "#EC4899"],
        borderColor: ["#059669", "#7C3AED", "#D97706", "#DC2626", "#0891B2", "#DB2777"],
        borderWidth: 2,
      },
    ],
  }

  // Welfare Level Data
  const welfareData = {
    labels: ["Prasejahtera", "Sejahtera I", "Sejahtera II", "Sejahtera III", "Sejahtera Plus"],
    datasets: [
      {
        data: [711, 154, 102, 69, 31],
        backgroundColor: ["#EF4444", "#F59E0B", "#10B981", "#06B6D4", "#8B5CF6"],
        borderColor: ["#DC2626", "#D97706", "#059669", "#0891B2", "#7C3AED"],
        borderWidth: 2,
      },
    ],
  }

  // Land Use Data
  const landUseData = {
    labels: ["Pekarangan", "Perkebunan", "Lain-lain", "Persawahan"],
    datasets: [
      {
        data: [214, 224, 65, 47],
        backgroundColor: ["#10B981", "#F59E0B", "#8B5CF6", "#06B6D4"],
        borderColor: ["#059669", "#D97706", "#7C3AED", "#0891B2"],
        borderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || ""
            const value = context.parsed || context.raw
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = ((value / total) * 100).toFixed(1)
            return `${label}: ${value} jiwa (${percentage}%)`
          },
        },
      },
    },
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y} jiwa`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3,240</div>
              <p className="text-sm text-gray-600">Total Penduduk</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">968</div>
              <p className="text-sm text-gray-600">Kepala Keluarga</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <p className="text-sm text-gray-600">Kampung</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">850</div>
              <p className="text-sm text-gray-600">Hektar</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gender Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribusi Jenis Kelamin</CardTitle>
            <CardDescription>Perbandingan jumlah penduduk laki-laki dan perempuan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Pie data={genderData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>

        {/* Age Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribusi Usia</CardTitle>
            <CardDescription>Pembagian penduduk berdasarkan kelompok usia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Doughnut data={ageData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>

        {/* Population by Kampung */}
        <Card>
          <CardHeader>
            <CardTitle>Penduduk per Kampung</CardTitle>
            <CardDescription>Distribusi penduduk di setiap kampung</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Bar data={kampungData} options={barOptions} />
            </div>
          </CardContent>
        </Card>

        {/* Occupation Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Mata Pencaharian</CardTitle>
            <CardDescription>Distribusi pekerjaan penduduk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Doughnut data={occupationData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>

        {/* Welfare Level */}
        <Card>
          <CardHeader>
            <CardTitle>Tingkat Kesejahteraan</CardTitle>
            <CardDescription>Klasifikasi keluarga berdasarkan tingkat kesejahteraan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Bar
                data={{
                  labels: welfareData.labels,
                  datasets: [
                    {
                      ...welfareData.datasets[0],
                      label: "Jumlah KK",
                    },
                  ],
                }}
                options={{
                  ...barOptions,
                  plugins: {
                    ...barOptions.plugins,
                    tooltip: {
                      callbacks: {
                        label: (context: any) => `${context.parsed.y} KK`,
                      },
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Land Use */}
        <Card>
          <CardHeader>
            <CardTitle>Penggunaan Lahan</CardTitle>
            <CardDescription>Pembagian luas wilayah berdasarkan penggunaan (Ha)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Pie
                data={landUseData}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    tooltip: {
                      callbacks: {
                        label: (context: any) => {
                          const label = context.label || ""
                          const value = context.parsed || context.raw
                          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
                          const percentage = ((value / total) * 100).toFixed(1)
                          return `${label}: ${value} Ha (${percentage}%)`
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Statistics Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Population by Kampung Table */}
        <Card>
          <CardHeader>
            <CardTitle>Rincian Penduduk per Kampung</CardTitle>
            <CardDescription>Data lengkap kependudukan per kampung</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Kampung</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Jumlah</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Karian Baru</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">1,575</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">48.6%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Gubug Lama</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">675</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">20.8%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Pasir Angin</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">560</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">17.3%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Nanggela Baru</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">280</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">8.6%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Gubug PGRI</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">150</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">4.6%</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">3,240</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Land Use Table */}
        <Card>
          <CardHeader>
            <CardTitle>Rincian Penggunaan Lahan</CardTitle>
            <CardDescription>Pembagian luas wilayah desa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Jenis Lahan</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Luas (Ha)</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Perkebunan</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">224</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">26.4%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Pekarangan</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">214</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">25.2%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Lain-lain</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">65</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">7.6%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Persawahan</td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-semibold">47</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">5.5%</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">550</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">64.7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Insight Demografi</CardTitle>
          <CardDescription>Analisis singkat data kependudukan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Fakta Menarik:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kampung Karian Baru memiliki populasi terbesar (48.6% dari total penduduk)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Rasio jenis kelamin seimbang (50% laki-laki, 50% perempuan)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Rata-rata 3.3 orang per kepala keluarga</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>73.5% penduduk dalam usia produktif (15-64 tahun)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Karakteristik Ekonomi:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mayoritas bekerja sebagai buruh tani/kebun (38.6%)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>73.4% keluarga masih dalam kategori prasejahtera</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kepadatan: 3.8 jiwa per hektar</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lahan perkebunan mendominasi (26.4% dari total luas)</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Village Boundaries */}
      <Card>
        <CardHeader>
          <CardTitle>Batas Wilayah Desa</CardTitle>
          <CardDescription>Batas-batas geografis Desa Calungbungur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sebelah Utara</h4>
                  <p className="text-sm text-gray-600">Desa Sajira, Sukarame, Sukajaya dan Calungbungur</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sebelah Timur</h4>
                  <p className="text-sm text-gray-600">Desa Sukasari</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sebelah Selatan</h4>
                  <p className="text-sm text-gray-600">Desa Sukamarga</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sebelah Barat</h4>
                  <p className="text-sm text-gray-600">Desa Sanghiangjaya</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
