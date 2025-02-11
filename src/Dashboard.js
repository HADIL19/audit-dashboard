import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";


import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const Dashboard = () => {
  const stats = [
    { label: "Configurations Validées", value: 77, icon: "✅" },
    { label: "Erreurs Détectées", value: 12, icon: "⚠️" },
    { label: "Utilisateurs Actifs", value: 116, icon: "👤" },
    { label: "Partenaires Internationaux", value: 25, icon: "🌍" },
  ];

  const auditData = [
    { name: "Jan", valid: 40, errors: 5 },
    { name: "Feb", valid: 55, errors: 10 },
    { name: "Mar", valid: 60, errors: 7 },
  ];

  const categoryData = [
    { name: "Electronics", value: 30, color: "#ff0000" },
    { name: "Furniture", value: 50, color: "#00ff00" },
    { name: "Toys", value: 20, color: "#cccccc" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4 flex items-center">
          <CardContent>
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p className="text-2xl">{stat.value} {stat.icon}</p>
          </CardContent>
        </Card>
      ))}

      <div className="col-span-2">
        <h2 className="text-xl font-bold mb-4">Statistiques d'Audit</h2>
        <BarChart width={500} height={300} data={auditData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="valid" fill="#00ff00" />
          <Bar dataKey="errors" fill="#ff0000" />
        </BarChart>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
        <PieChart width={300} height={300}>
          <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div>
        <Button className="bg-green-600 text-white">📥 Télécharger le Rapport</Button>
      </div>
    </div>
  );
};

export default Dashboard;
