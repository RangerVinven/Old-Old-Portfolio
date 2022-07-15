import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

export default function BarChart() {

    Chart.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    )

    return (
        <div>
            <Bar
            height={370}
            width={600}
            options={{
                scales: {
                    y: {
                        ticks: {
                            callback: function(value, index, values) {
                                if(value === 1) {
                                    return "Beginner";
                                } else if(value === 2) {
                                    return "Intermediate";
                                } else if(value === 3) {
                                    return "Advanced";
                                } else {
                                    return ""
                                }
                            }
                        }
                    }
                }
            }}
            data={{
                labels: ['(Java/Type)Script', 'Python', 'C#', 'Java', 'Dart', 'HTML+CSS', 'SQL'],
                datasets: [{
                    label: 'Languages',
                    data: [2.5, 3, 2.25, 3, 2.5, 3, 3],
                }]
            }} />
        </div>
    )
}
