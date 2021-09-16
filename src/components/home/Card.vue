<template>
	<div class="card">
		<slot>
			<span class="name">火爆推荐</span>
		</slot>
	</div>
</template>

<script>
</script>

<style scoped>
	.card{
		width: 100%;
		height: 2.8125rem;
		text-align: center;
		padding: 0.625rem 0;
		position: relative;
		font-size: 1.25rem;
		
	}
	
	.name::before,.name::after{
		
		position: absolute; 
		content: "";
		width: 0.65rem;
		height: .65rem;
		background: orange;
		border-radius: 50%;
		
	}
	.name::before{
		margin: 0 -1.2rem;
		top: 40%;
	}
	
	.name::after{
		margin: 0 0.625rem;
		top: 40%;
	}
</style>
