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

export enum Categories {
    Languages,
    Frameworks,
    Methodologies,
    Databases,
    DevOps
}

type Props = {
    dataToShow: Categories
}

export default function BarChart(props: Props) {

    const languageData = {
        labels: ['(Java/Type)Script', 'Python', 'C#', 'Java', 'Dart', 'HTML+CSS', 'SQL'],
        datasets: [{
            label: 'Languages',
            data: [2.5, 3, 2.25, 3, 2.5, 3, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    }

    const frameworkData = {
        labels: ['React', 'NextJS', 'Angular', 'Express', 'Tailwind CSS'],
        datasets: [{
            label: 'Frameworks',
            data: [3, 2.5, 1, 2.75, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    const methodologyData = {
        labels: ['Waterfall', 'Agile'],
        datasets: [{
            label: 'Development Methodologies',
            data: [3, 2],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    const databasesData = {
        labels: ['MySQL', 'Postgresql', 'MongoDB'],
        datasets: [{
            label: 'Databases',
            data: [3, 2.75, 2.5],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const devOpsData = {
        labels: ['Linux', 'Git'],
        datasets: [{
            label: 'DevOps',
            data: [3, 3],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                ticks: {
                    callback: function(value: any, index: number, values: any) {
                        if(value === 1) {
                            return "Beginner";
                        } else if(value === 2) {
                            return "Intermediate";
                        } else if(value === 3) {
                            return "Advanced";
                        } else {
                            return "";
                        }
                    }
                }
            }
        }
    };

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

    const barHeight = 370;
    const barWidth = 600;

    // Returns the bar that's to be shown to the user
    const barToShow = () => {
        if(props.dataToShow === Categories.Languages) return <Bar data={languageData} options={options} width={barWidth} height={barHeight} />;
        if(props.dataToShow === Categories.Frameworks) return <Bar data={frameworkData} options={options} width={barWidth} height={barHeight} />;
        if(props.dataToShow === Categories.Methodologies) return <Bar data={methodologyData} options={options} width={barWidth} height={barHeight} />;
        if(props.dataToShow === Categories.Databases) return <Bar data={databasesData} options={options} width={barWidth} height={barHeight} />;
        if(props.dataToShow === Categories.DevOps) return <Bar data={devOpsData} options={options} width={barWidth} height={barHeight} />;
    }

    return (
        <div>
            {
                barToShow()
            }
        </div>
    )
}
