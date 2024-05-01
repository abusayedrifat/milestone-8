import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, ScatterChart, Scatter, Bar} from 'recharts';


const LineCharts = () => {
    const studentData = [
        { 
          name: "Alice", 
          math_marks: 85, 
          chemistry_marks: 78, 
          english_marks: 90, 
          physics_marks: 82, 
          biology_marks: 88 
        },
        { 
          name: "Bob", 
          math_marks: 78, 
          chemistry_marks: 82, 
          english_marks: 85, 
          physics_marks: 76, 
          biology_marks: 80 
        },
        { 
          name: "Charlie", 
          math_marks: 92, 
          chemistry_marks: 90, 
          english_marks: 88, 
          physics_marks: 95, 
          biology_marks: 93 
        },
        { 
          name: "David", 
          math_marks: 63, 
          chemistry_marks: 70, 
          english_marks: 72, 
          physics_marks: 65, 
          biology_marks: 68 
        },
        { 
          name: "Emma", 
          math_marks: 70, 
          chemistry_marks: 65, 
          english_marks: 75, 
          physics_marks: 68, 
          biology_marks: 71 
        },
        { 
          name: "Frank", 
          math_marks: 87, 
          chemistry_marks: 84, 
          english_marks: 92, 
          physics_marks: 89, 
          biology_marks: 86 
        },
        { 
          name: "Grace", 
          math_marks: 75, 
          chemistry_marks: 68, 
          english_marks: 80, 
          physics_marks: 72, 
          biology_marks: 78 
        },
        { 
          name: "Hannah", 
          math_marks: 82, 
          chemistry_marks: 79, 
          english_marks: 88, 
          physics_marks: 84, 
          biology_marks: 81 
        },
        { 
          name: "Isaac", 
          math_marks: 90, 
          chemistry_marks: 88, 
          english_marks: 95, 
          physics_marks: 92, 
          biology_marks: 89 
        },
        { 
          name: "Jack", 
          math_marks: 79, 
          chemistry_marks: 73, 
          english_marks: 81, 
          physics_marks: 78, 
          biology_marks: 76 
        },
        { 
          name: "Kelly", 
          math_marks: 68, 
          chemistry_marks: 72, 
          english_marks: 75, 
          physics_marks: 70, 
          biology_marks: 69 
        },
        { 
          name: "Liam", 
          math_marks: 95, 
          chemistry_marks: 91, 
          english_marks: 97, 
          physics_marks: 94, 
          biology_marks: 96 
        },
        { 
          name: "Mia", 
          math_marks: 73, 
          chemistry_marks: 66, 
          english_marks: 78, 
          physics_marks: 70, 
          biology_marks: 75 
        },
        { 
          name: "Noah", 
          math_marks: 84, 
          chemistry_marks: 80, 
          english_marks: 86, 
          physics_marks: 82, 
          biology_marks: 83 
        },
        { 
          name: "Olivia", 
          math_marks: 88, 
          chemistry_marks: 85, 
          english_marks: 92, 
          physics_marks: 90, 
          biology_marks: 89 
        }
      ];
      const scatterChartData = [
        { x: 14, y: 29 },
        { x: 65, y: 35 },
        { x: 76, y: 89 },
        { x: 23, y: 23 },
        { x: 20, y: 56 },
        { x: 60, y: 51 },
        { x: 45, y: 76 },
        { x: 80, y: 21 },
        { x: 90, y: 33 },
        { x: 100, y: 67 }
      ];
      const attendanceData = [
        { day: "5 april", present: 75, absent: 25 },
        { day: "6 april", present: 80, absent: 20 },
        { day: "7 april", present: 70, absent: 30 },
        { day: "8 april", present: 85, absent: 15 },
        { day: "9 april", present: 90, absent: 10 },
        { day: "10 april", present: 75, absent: 25 },
        { day: "11 april", present: 95, absent: 5 }
      ];
        
      
    return (
        <div>
            <LineChart  width={900} height={400} data={studentData}  >
                <CartesianGrid strokeDasharray={"4"}></CartesianGrid>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                {/* <Legend></Legend> */}
                <Line type={'monotone'} dataKey={'math_marks'}  stroke='purple' ></Line>
                <Line type={'monotone'} dataKey={'chemistry_marks'} stroke='green' ></Line>
                <Line type={'monotone'} dataKey={'physics_marks'} stroke='blue' ></Line>
                <Line type={'monotone'} dataKey={'english_marks'} stroke='violet' ></Line>
                <Line type={'monotone'} dataKey={'biology_marks'} stroke='brown' ></Line>

            </LineChart>

            {/* scttered chat */}
            <ScatterChart height={500} width={800} data={scatterChartData}>
            <XAxis type='number' dataKey={'x'} name='weight' unit={'kg'}></XAxis>
            <YAxis type='number' dataKey={'y'} name='height' unit={'cm'}  ></YAxis>
            <Tooltip></Tooltip>
            <Scatter ></Scatter>
            </ScatterChart>
        
            {/* barcharts */}
            <BarChart width={900} height={400} data={attendanceData}>
            <XAxis dataKey={'day'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey={'present'} fill='#8884d8'  ></Bar>
            <Bar dataKey={'absent'} fill='#82ca9d'></Bar>
            </BarChart>
        </div>
    );
};

export default LineCharts;