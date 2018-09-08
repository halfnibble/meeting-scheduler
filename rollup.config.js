// Rollup plugins
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/meeting-scheduler.js',
    output: {
        file: 'dist/js/meeting-scheduler.js',
        sourceMap: 'inline',
        format: 'umd',
        name: 'MeetingScheduler'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ],
};