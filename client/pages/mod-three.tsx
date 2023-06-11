import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'
import { ModThreeInput } from '@/components/ModThreeInput'

const inter = Inter({ subsets: ['latin'] })
type FSMVisualizerProps = {
  currentState: string
}
const FSMVisualizer = ({currentState}: FSMVisualizerProps) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const states = ["S0", "S1", "S2"];
    // Use D3 to manipulate the SVG and visualize the FSM

    // Example: Draw circles for states
    svg
      .selectAll('circle')
      .data(states) // Replace with your actual data
      .enter()
      .append('circle')
      .attr('cx', (d: string, i: number) => i * 150 + 40)
      .attr('cy', 150)
      .attr('r', 40)
      .attr('fill', (d: string) => (d === currentState ? 'red': 'blue'));
    svg
      .selectAll('text')
      .data(states)
      .enter()
      .append('text')
      .attr('x', (d: string, i: number) => i * 150 + 40)
      .attr('y', 150)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .text((d: string) => d)
      .attr('fill', 'white');
  }, []);

  return (
    <svg ref={svgRef} width={600} height={400} />
  );
};


export default function ModThree() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <ModThreeInput />
      <FSMVisualizer currentState={"S1"}/>
    </main>
  )
}
