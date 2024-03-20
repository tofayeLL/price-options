import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { student: "Student 1", math: 85, chemistry: 78 },
        { student: "Student 2", math: 78, chemistry: 82 },
        { student: "Student 3", math: 92, chemistry: 90 },
        { student: "Student 4", math: 65, chemistry: 70 },
        { student: "Student 5", math: 70, chemistry: 75 },
        { student: "Student 6", math: 88, chemistry: 85 },
        { student: "Student 7", math: 75, chemistry: 80 },
        { student: "Student 8", math: 82, chemistry: 88 },
        { student: "Student 9", math: 90, chemistry: 92 },
        { student: "Student 10", math: 73, chemistry: 68 }
      ];

      
    return (
        <div>
            <Lchart height={500} width={500} data={mathMarksData}>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'chemistry'} stroke='yellow' ></Line>
            </Lchart>
            
        </div>
    );
};

export default LineChart;